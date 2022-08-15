import React from 'react';
import styled from 'styled-components';

const SignIn = ({SignInUpToggle},props) => {
    

    return (
        <LoginForm>
            <h2>로그인</h2>
            <h2>아이디</h2>
            <input type="text" />
            <h2>비밀번호</h2>
            <input type="text" name="" id="" />
            <button>로그인</button>
            <button onClick={SignInUpToggle}>회원가입</button>
        </LoginForm>
    );
};

export default SignIn;

const LoginForm = styled.form`
    h2:first-of-type{
        font-size: ${(props) => props.theme.fontsizes.subtitle};
        margin-bottom: 40px;
    }
    h2 {
        font-size: ${(props) => props.theme.fontsizes.subtitle2};
        margin-bottom: 20px;
    }
    input {
        margin-bottom: 40px;
    }
    button{
        display: block;
        width: 100%;
        margin-bottom: 20px;
        font-size: ${(props) => props.theme.fontsizes.contentstext};
    }
`