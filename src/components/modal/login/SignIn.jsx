import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import{UserLogIn} from'../../../redux/modules/user';

const SignIn = ({SignInUpToggle},props) => {
    const dispatch = useDispatch()
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    const onSubmitHandler = () => {
        dispatch(UserLogIn(email, password))
    }
    return (
        <LoginForm onSubmit={onSubmitHandler}>
            <h2>로그인</h2>
            <h2>이메일</h2>
            <input type="text" />
            <h2>비밀번호</h2>
            <input type="password" name="" id="" />
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