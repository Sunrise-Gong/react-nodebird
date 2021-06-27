import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import { Form, Input, Checkbox, Button } from 'antd';

import useInput from '../hooks/useInput';
import { SIGN_UP_REQUEST } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

const Signup = () => {
    const dispatch = useDispatch();
    const { signUpLoading } = useSelector((state) => state.user);

    const [email, onChangeEmail] = useInput('');
    const [nickname, onChangeNickname] = useInput('');
    const [password, onChangePassword] = useInput('');
    //----------------------------------------
    const [passwordCheck, setPasswordCheck] = useState('');
    const [passwordError, setPasswordError] = useState(false);
    const onChangePasswordCheck = useCallback((e) => {
        setPasswordCheck(e.target.value);
        setPasswordError(e.target.value !== password);
    }, [password]);
    //----------------------------------------
    const [term, setTerm] = useState('');
    const [termError, setTermError] = useState(false);
    const onChangeTerm = useCallback((e) => {
        setTerm(e.target.checked);
        setTermError(false);
    }, []);
    //----------------------------------------
    const onSubmit = useCallback(() => {
        if (password !== passwordCheck) { return setPasswordError(true); } // 패스워드 재확인

        if (!term) { return setTermError(true); } // 동의 체크박스 

        console.log(email, password, nickname);

        dispatch({
            type: SIGN_UP_REQUEST,
            data: { email, password, nickname },
        });
    }, [email, password, passwordCheck, term]);
    //----------------------------------------
    return (
        <AppLayout>
            <Head>
                <title>회원가입 | NodeBird</title>
            </Head>
            <Form onFinish={onSubmit}>
                <div>
                    <label htmlFor="user-email">이메일</label>
                    <br />
                    <Input
                        name="user-email"
                        type="email"
                        value={email}
                        required
                        onChange={onChangeEmail} />
                </div>
                <div>
                    <label htmlFor="user-nick">닉네임</label>
                    <br />
                    <Input
                        name="user-nick"
                        value={nickname}
                        required
                        onChange={onChangeNickname} />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input
                        name="user-password"
                        type="password"
                        value={password}
                        required
                        onChange={onChangePassword} />
                </div>
                <div>
                    <label htmlFor="user-password-check">비밀번호체크</label>
                    <br />
                    <Input
                        name="user-password-check"
                        type="password"
                        value={passwordCheck}
                        required
                        onChange={onChangePasswordCheck} />

                    {passwordError && <div style={{ color: 'red' }}> 비밀번호가 일치하지 않습니다. </div>}
                </div>
                <div>
                    <Checkbox
                        name="user-term"
                        checked={term}
                        onChange={onChangeTerm}
                    >해돋이의 노예가 되겠습니까?
                    </Checkbox>
                    {termError && <div style={{ color: 'red' }}> 노예가 되셔야 가입이 가능합니다. </div>}
                </div>
                <div style={{ marginTop: 10 }}>
                    <Button
                        type="primary"
                        htmlType="submit"
                        loading={signUpLoading}>가입하기
                    </Button>
                </div>
            </Form>
        </AppLayout>
    );
};

export default Signup;