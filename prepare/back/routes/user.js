const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
// const db = require('../models');
const { User, Post } = require('../models');
const { isLoggedIn, isNotLoggedIn } = require('./middlewares');

const router = express.Router();

/*------------------------------- 새로고침시 유저정보 */
router.get('/', async (req, res, next) => { // GET /user
    try {
        if (req.user) {
            const user = await User.findOne({
                where: { id: req.user.id },
                attributes: { exclude: ['password'] },
                include: [
                    { model: Post, },
                    { model: User, as: 'Followings', },
                    { model: User, as: 'Followers', },
                ]
            });
            res.status(200).json(user);
        } else {
            res.status(200).json(null);
        }
    } catch (error) {
        console.error(error);
        next(error);
    }

});

/*------------------------------- 로그인 */
router.post('/login', isNotLoggedIn, (req, res, next) => { // req, res, next를 사용하기 위해서 미들웨어 확장

    passport.authenticate('local', (err, user, info) => {
        // 서버 에러인 경우
        if (err) {
            console.error(err);
            return next(err);
        }
        // 클라이언트 에러인 경우(ex: 없는 이메일 입니다 or 비밀번호 불일치) (401: 비인증)
        if (info) { return res.status(401).send(info.reason); }

        // 패스포트 로그인(패스포트 자체 최종 검사) 
        return req.logIn(user, async (loginErr) => {
            if (loginErr) {
                console.error(loginErr);
                return next(loginErr);
            }
            const fullUserWithoutPassword = await User.findOne({
                where: { id: user.id },
                attributes: { exclude: ['password'] },
                include: [
                    { model: Post, },
                    { model: User, as: 'Followings', },
                    { model: User, as: 'Followers', },
                ]
            })
            return res.status(200).json(fullUserWithoutPassword);
        })
    })(req, res, next);
});

/*------------------------------- 회원가입 */
router.post('/', isNotLoggedIn, async (req, res, next) => { // POST /user/
    try {
        const exUser = await User.findOne({ where: { email: req.body.email, } }); // 동일한 이메일 주소가 db에 있는지 검사

        if (exUser) { return res.status(403).send('이미 사용중인 이메일 입니다.'); } // return을 하지 않으면 아래 코드들이 실행되는 문제발생 

        const hashedPassword = await bcrypt.hash(req.body.password, 12); // 비밀번호 해쉬화
        await User.create({
            email: req.body.email,
            nickname: req.body.nickname,
            password: hashedPassword,
        });
        res.status(200).send('회원가입 완료');

    } catch (error) {
        console.log('회원가입에러', error);
        next(error); // catch와 next를 통해서 에러를 보내면 에러들이 한방에 처리됨
    }
});

/*------------------------------- 로그아웃 */
router.post('/logout', isLoggedIn, (req, res) => {
    req.logout();
    req.session.destroy();
    res.send('ok');
});

/*------------------------------- 닉네임 수정 */
router.patch('/nickname', isLoggedIn, async (req, res, next) => {
    try {
        await User.update(
            { nickname: req.body.nickname },
            { where: { id: req.user.id } },
        );
        res.status(200).json({ nickname: req.body.nickname });
    
    } catch (error) {
        console.error(error);
        next(error);
    }
})

/*------------------------------- 팔로우 */
router.patch('/:userId/follow', isLoggedIn, async (req, res, next) => { // PATCH /user/1/follow
    try {
        const user = await User.findOne({ where: { id: req.params.userId } });
        
        if (!user) { return res.status(403).send('존재하지 않는 유저라 팔로우 못해요.')};
        
        await user.addFollowers(req.user.id);
        
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    
    } catch (error) {
        console.error(error);
        next(error);
    }
})

/*------------------------------- 팔로우 취소 */
router.delete('/:userId/follow', isLoggedIn, async (req, res, next) => { // DELETE /user/1/follow
    try {
        const user = await User.findOne({ where: { id: req.params.userId } });
        
        if (!user) { return res.status(403).send('존재하지 않는 유저라 언팔로우 못해요.')};
        
        await user.removeFollowers(req.user.id);
        
        res.status(200).json({ UserId: parseInt(req.params.userId, 10) });
    
    } catch(error) {
        console.error(error);
        next(error);
    }
})

module.exports = router;