import React, {useState} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { useForm } from "react-hook-form";
import{UserLogIn} from'../../../redux/modules/user';

const SignIn = ({SignInUpToggle},props) => {
    const dispatch = useDispatch()
    const { register, handleSubmit, formState:{errors}} = useForm();

    const onValid = () => {
        console.log("onValid execute")
    }

    const onInvalid = (errors) => {
        console.log(errors)
    }
    
    const onSubmit =(data) =>{
        dispatch(UserLogIn(data))
    }

    

   /*  const onChangeHandler = (e) =>{
        const id = e.target.id;
        const value = e.target.value;
        
        if(!value){
            return
        }else{
            if(id === 'email') setEmail(value);
            else setPassword(value);
        }

        console.log(email, password)
        
    }
    
    const onSubmitHandler = () => {
        dispatch(UserLogIn(email, password))
    } */
    return (
        <LoginForm onSubmit={handleSubmit((onValid, onInvalid, onSubmit))}>
            <h2>로그인</h2>
            <div>
                <h2>이메일</h2>
                <input
                    type="text"
                    placeholder='이메일을 입력해주세요.'
                    {...register("email",
                        {required: "Email is required", pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                        })}
                />
                {errors.email && errors.email.type === "pattern" && <p> 이메일 형식이 아닙니다. </p>}
            </div>
            <div>
                <h2>비밀번호</h2>
                <input 
                    type="password"
                    {...register("password", 
                        {required: "Password is required", pattern:/(?=.*\d{1,50})(?=.*[~`!@#$%\^&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/ })}
                    placeholder='비밀번호를 입력해주세요.'
                />
                {errors.password && errors.password.type === "pattern" && <p>영문, 숫자, 특수문자 혼합하여 8~20자리로 입력해주세요. </p>}
            </div>
            <button type='submit'>로그인</button>
            <button type='button' onClick={SignInUpToggle}>회원가입</button>
        </LoginForm>
    );
};

export default SignIn;

const LoginForm = styled.form`
    >h2:first-of-type{
        font-size: ${(props) => props.theme.fontsizes.subtitle};
        margin-bottom: 40px;
    }
    >div {
        margin-bottom: 30px;
    }
    >div>h2 {
        font-size: ${(props) => props.theme.fontsizes.subtitle2};
        margin-bottom: 20px;
    }
    p {
        margin: 10px 0 20px;
        color: ${(props) => props.theme.colors.falseColor};
        font-size: ${(props) => props.theme.fontsizes.alerttext};
    }
    button{
        display: block;
        width: 100%;
        margin-bottom: 20px;
        font-size: ${(props) => props.theme.fontsizes.contentstext};
    }
`