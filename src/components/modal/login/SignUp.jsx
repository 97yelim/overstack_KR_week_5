import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const SignUp = ({SignInUpToggle}) => {
    // 이메일, 닉네임, 비밀번호, 비밀번호 체크 확인
    const [email, setEmail] = useState('');
    const [nickname, setNickname] = useState('');
    const [password, setPassword] = useState('');
    const [passwordCheck, setPasswordCheck] = useState('');
    
    // 오류 메세지 출력
    const [passWordCheckAlert,setPassWordCheckAlert ] = useState('')

    const onChangeHandler = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        console.log(id, value)
        if(!value){
            return
        }else{
            if(id === 'email') setEmail(value);
            else if (id === 'nickname') setNickname(value);
            else if (id === 'password') setPassword(value);
            else setPasswordCheck(value);
        }

    }

    const onSubmitHandler = async(e) =>{ 
        e.preventDefault();
        //비밀번호 일치 확인
        if (password !== passwordCheck){
            setPassWordCheckAlert('비밀번호가 일치하지 않습니다.')
            return;
        }else{
            setPassWordCheckAlert('')
        }

        await axios
        .post("http://warmwinter.co.kr/api/member/signup",{
            email,
            nickname,
            password,
            passwordCheck
        },{ 
            withCredentials: true // 쿠키 cors 통신 설정
        })
        
    }

    return (
        <SignUpForm >
            <h2>회원가입하기</h2>
            <div>
                <h2>이메일</h2>
                <button type='button'>중복확인</button>
            </div>
            <input
                type="text"
                id = 'email'
                placeholder='사용하실 이메일을 입력해주세요.'
                onChange={onChangeHandler}
              />
            <div>
                <h2>닉네임</h2>
                <button type='button'>중복확인</button>
            </div>
            <input
                type="text" 
                id = 'nickname'
                placeholder='사용하실 닉네임을 입력해주세요.'
                onChange={onChangeHandler}
            />
            <h2>비밀번호</h2>
            <input 
                type="text"
                id = 'password'
                placeholder='사용하실 비밀번호를 입력해주세요.'
                onChange={onChangeHandler}
             />
            <h2>비밀번호 확인</h2>
            <input
                type="text"
                id = 'passwordCheck'
                placeholder='비밀번호를 한번 더 입력해주세요.'
                onChange={onChangeHandler}
            />
            <span>{passWordCheckAlert}</span>
            <button type='submit' onClick={onSubmitHandler}>회원가입 완료</button>
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
        display: flex;
        justify-content: space-between;
        align-items: center;
        button{
            width: 110px;
        }
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