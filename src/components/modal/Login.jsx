import React, { useState } from 'react';
import styled from 'styled-components';
import SignIn from '../login/SignIn'; 
import SignUp from '../login/SignUp';
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = ({modalClose}, porps) => {
    const [gotoSignUp, setGotoSignUp] = useState(false)
    const SignInUpToggle =() =>{
        setGotoSignUp(!gotoSignUp)
    }
    return (
        <>
        <LoginBox>
            <span><FontAwesomeIcon onClick={modalClose} icon={faXmark}/></span>
            {gotoSignUp === false ? <SignIn  SignInUpToggle = {SignInUpToggle}></SignIn> : <SignUp SignInUpToggle = {SignInUpToggle}></SignUp>}
        </LoginBox>
        <CloseBox  onClick={modalClose}></CloseBox>
        </>
    );
};

export default Login;

const CloseBox = styled.div`
    cursor: pointer;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index:5 ;
    background-color: #00000099;
    backdrop-filter: blur(5px);
`

const LoginBox = styled.div `
    position: absolute;
    width: 600px;
    height: 760px;
    background-color: #fff;
    border-radius: 40px;
    z-index: 6;
    padding: 40px;
    box-sizing: border-box;
    
    span{
        display: block;
        width: 100%;
        text-align: right;
        font-size: ${(props) => props.theme.fontsizes.subtitle};
        color:${(props) => props.theme.colors.buttonColor};
        svg{
            cursor: pointer;
            transition: all .3s;
            &:hover{
                color:${(props) => props.theme.colors.hoverColor};
            }
        }
    }
`