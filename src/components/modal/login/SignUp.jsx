import React, { useRef, useState  } from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';
import axios from 'axios';



const SignUp = ({SignInUpToggle}) => {

    const { register, handleSubmit, formState:{errors}, watch} = useForm();
    const [email, setEmail] = useState('');
    
    const onChange =(e)=>{
        const id = e.target.id;
        setEmail(e.target.value)
    }

    const password = useRef();
    password.current =watch("password")

    const onValid = () => {
        console.log("onValid execute")
    }

    const onInvalid = (errors) => {
        console.log(errors)
    }
    
   

    const onSubmit = async(data) => {
        console.log(data)
        /* await axios
        .post("http://warmwinter.co.kr/api/member/signup",data,{
            withCredentials: true // 쿠키 cors 통신 설정
        })
        alert('회원가입 되셨습니다 축하합니다~')
        SignInUpToggle() */
    }
    
    /* const onoverlap = async(email) => {
        await axios
        .get(`http://warmwinter.co.kr/api/member/idCheck/${email}`)
    } */
    

    return (
        <SignUpForm onSubmit={handleSubmit((onValid, onInvalid, onSubmit))}>
            <h2>회원가입하기</h2>
            <div>
                <div>
                    <h2>이메일</h2>
                    <button /* onClick={onoverlap(email)} */ type='button'>중복확인</button>
                </div>
                <input
                    type="text"
                    id = "email"
                    onChange={onChange}
                    placeholder='이메일을 적어주세요.'
                    {...register("email",
                        {required: "Email is required", pattern:/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i,
                        })}
                />
                {errors.email && errors.email.type === "pattern" && <p> 이메일 형식이 아닙니다. </p>}
            </div>
            <div>
                <div>
                    <h2>닉네임</h2>
                    <button type='button'>중복확인</button>
                </div>
                <span> 영어, 숫자, 한글을 사용하여 2~8자리로 입력해주세요.</span>
                <span>초성은 사용 불가합니다.</span>
                <input
                    type="text" 
                    {...register("nickname", {required: "Nickname is required", pattern:/^(?=.*[a-z0-9가-힣])[a-z0-9가-힣]{2,8}$/})}
                    placeholder='사용하실 닉네임을 입력해주세요.'
                />
                {errors.nickname && errors.nickname.type === "pattern" && <p>올바른 닉네임이 아닙니다.</p>}
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