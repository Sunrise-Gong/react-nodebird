const express = require('express');

const { Post, Comment } = require('../models');
const { isLoggedIn } = require('./middlewares');

const router = express.Router();

router.post('/', isLoggedIn, async (req, res, next) => { // POST /post
    try {
        const post = await Post.create({ 
            content: req.body.content, 
            UserId: req.user.id, // req.user: passport의 deserializeUser로 생성된 데이터
        });
        
        res.status(201).json(post);
    
    } catch(error) {
        console.error(error);
        next(error);
    }
});

router.post('/:postId/comment', isLoggedIn, async (req, res, next) => { // POST /:postId/comment
    try {
        
        const post = await Post.findOne({ where: { id: req.params.postId } });
        if (!post) { return res.status(403).send('존재하지 않는 게시글 입니다.')}
        
        const comment = await Comment.create({ 
            content: req.body.content, 
            PostId: req.params.postId,
            UserId: req.user.id,
        });
        
        res.status(201).json(comment);
    
    } catch(error) {
        console.error(error);
        next(error);
    }
    
});

router.delete('/', (req, res) => { // DELETE /post
    res.json({ id : 1 });
});

module.exports = router;