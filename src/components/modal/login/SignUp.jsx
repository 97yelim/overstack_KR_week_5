import React, { useRef, useState } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import axios from 'axios';
const SignUp = ({SignInUpToggle}) => {
    const checkId = {
        email: process.env.REACT_APP_EMAIL_CHECK,
        name: process.env.REACT_APP_NAME_CHECK,
        signup: process.env.REACT_APP_SIGNUP
    }
    const {register, handleSubmit, formState:{errors}, watch} = useForm();
    /* console.log(watch("email")) */
    const [check, setcheck] = useState({
        emailCheckState : false,
        nicknameCheckState: false
    })
    const password = useRef();
    password.current =watch("password")
    const onValid = () => {
        console.log("onValid execute")
    }
    const onInvalid = (errors) => {
        console.log(errors)
    }
    //이메일 중복 체크
    const onEmailCheck = async() => {
        try {
            const email = watch("email")
            const data = await axios.get(`${checkId.email}/${email}`);
            //중복 x = false , 중복 o = true,
            if(data.data === false){
                setcheck({
                    ...check, emailCheckState:true
                });
            }else{
                setcheck({
                    ...check, emailCheckState:false
                });
            };
        } catch (error){return;}
    }
    //닉네임 중복 체크
    const onNicknameCheck = async()=>{
        try{
            const nickname = watch("nickname")
            const data = await axios.get(`${checkId.name}/${nickname}`)
            if(data.data === false){
                setcheck({
                    ...check, nicknameCheckState:true
                })
            }else{
                setcheck({
                    ...check, nicknameCheckState:false
                })
            }
        }catch(error){return;}
    }
    const isNickCheck = () => (
        check.nicknameCheckState === true? true : false
    )
    const isEmailCheck = () => (
        check.emailCheckState === true? true : false
    )
    console.log('닉네임', check.nicknameCheckState )
    console.log('이메일', check.emailCheckState )
    const onSubmit = async(data) => {
        console.log(data)
        await axios
        .post(checkId.signup,data,{
            withCredentials: true // 쿠키 cors 통신 설정
        })
        alert('회원가입 되셨습니다 축하합니다~')
        SignInUpToggle()
    }
    return (
        <SignUpForm onSubmit={handleSubmit((onValid, onInvalid, onSubmit))}>
            <h2>회원가입하기</h2>
            <div>
                <div>
                    <h2>이메일</h2>
                    <button onClick={onEmailCheck} type='button'>중복확인</button>
                </div>
                <input
                    type="text"
                    name = "email"
                    placeholder='이메일을 적어주세요.'
                    {...register("email",
                        {required: "Email is required", pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                        validate: ()=> isEmailCheck(false)}
                    )}
                />
                {errors.email && errors.email.type === "pattern" && <p> 이메일 형식이 아닙니다. </p>}
                {errors.email && errors.email.type === "validate" && <p> 중복체크 해주세요. </p>}
            </div>
            <div>
                <div>
                    <h2>닉네임</h2>
                    <button onClick={onNicknameCheck} type='button'>중복확인</button>
                </div>
                <span> 영어, 숫자, 한글을 사용하여 2~8자리로 입력해주세요.</span>
                <span>초성은 사용 불가합니다.</span>
                <input
                    type="text"
                    name="nickname"
                    {...register("nickname", {required: "Nickname is required", pattern:/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/,
                    validate: () => isNickCheck(false)})}
                    placeholder='사용하실 닉네임을 입력해주세요.'
                />
                {errors.nickname && errors.nickname.type === "pattern" && <p>올바른 닉네임이 아닙니다.</p>}
                {errors.nickname && errors.nickname.type === "validate" && <p> 중복체크 해주세요. </p>}
            </div>
            <div>
                <h2>비밀번호</h2>
                <span>영어 대소문자, 특수문자(!@#$%^&*)를 이용한 비밀번호는 8자 이상 20자 이하로 입력해주세요.</span>
                <input
                    type="password"
                    {...register("password",
                        {required: "Password is required",  minLength: 8, pattern:/(?=.*\d{1,50})(?=.*[~`!@#$%&*()-+=]{1,50})(?=.*[a-zA-Z]{2,50}).{8,16}$/ })}
                    placeholder='사용하실 비밀번호를 입력해주세요.'
                />
                {errors.password && errors.password.type === "minLength" && <p> 비밀번호가 너무 짧습니다. </p>}
                {errors.password && errors.password.type === "pattern" && <p>영문, 숫자, 특수문자 혼합하여 8~20자리로 입력해주세요. </p>}
            </div>
            <div>
                <h2>비밀번호 확인</h2>
                <input
                    type="password"
                    {...register("passwordCheck",
                    {required: "PasswordCheck is required",
                    validate: {
                        wrongPw:(value) =>
                    value === password.current || "비밀번호가 일치하지 않습니다."
                    }
                })}
                    placeholder='비밀번호를 한번 더 입력해주세요.'
                />
                {errors.passwordCheck && errors.passwordCheck.type === "wrongPw" && <p> 비밀번호가 일치하지 않습니다. </p>}
            </div>
            <button type='submit'>회원가입 완료</button>
            <button type='submit' onClick={SignInUpToggle}>취소</button>
        </SignUpForm>
    );
};
export default SignUp;
const SignUpForm = styled.form`
    >h2:first-of-type{
            font-size: ${(props) => props.theme.fontsizes.subtitle};
            margin-bottom: 40px;
        }
    >div {
        margin-bottom: 40px;
    }
    div>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            width: 110px;
        }
    }
    h2 {
        font-size: ${(props) => props.theme.fontsizes.subtitle2};
        margin-bottom: 10px;
    }
    button{
        display: block;
        width: 100%;
        margin-bottom: 20px;
        font-size: ${(props) => props.theme.fontsizes.contentstext};
    }
    p {
        margin-top: 5px;
        color: ${(props) => props.theme.colors.falseColor};
        font-size: ${(props) => props.theme.fontsizes.alerttext};
    }
    >div>span{
        font-size: ${(props) => props.theme.fontsizes.alerttext};
        text-align: left;
        margin-bottom: 10px;
        line-height: 1.2rem;
    }
`











박수원 (8기)에 메시지 보내기








Shift + Enter 키를 눌러 새 행을 추가합니다