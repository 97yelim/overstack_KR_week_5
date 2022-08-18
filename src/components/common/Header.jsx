import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Layout from './Layout';
import styled from 'styled-components';
import Login from '../modal/Login';
import logo from '../../assets/img/logo.webp'
import axios from 'axios';

const Header = (props) => {
    const navigate = useNavigate();
    const [modalOpen, setModalOpen] = useState(false);
    const modalClose = () => {
        setModalOpen(!modalOpen)
    }

    const isLogin = localStorage.getItem('isLogin');
    const nickname = localStorage.getItem('nickname');
    
    //로그아웃 토큰 지우기
    const logOut = async()=>{
        const contest = window.confirm("정말 로그아웃 하실건가요?");
        if(contest === true){
            const Refreshtoken = localStorage.getItem('refreshToken');
            const Authorization = localStorage.getItem('authorization');
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `${Authorization}`,
                Refreshtoken: `${Refreshtoken}`
            }
            const url = 'http://warmwinter.co.kr/api/member/logout'
            axios.post(url, {}, {
                headers : headers
                })
            window.localStorage.clear();
            navigate("/main")
            setModalOpen(false)
            }
            else if(contest === false){
                return
            }
        }
    
       
    const onClickHandler = () => {
        navigate("/main");
      };

    return (
        <Navigator>
            <Layout>
                <StHeader>
                    <img src={logo} alt="로고" onClick={onClickHandler} /> 
                    {isLogin ? 
                    <LoginDiv>
                        <p>{nickname}님 어서오세요.</p>
                        <button onClick={logOut}>로그아웃</button>
                    </LoginDiv>
                     :
                     <div>
                         <p onClick={modalClose}>로그인 ˑ 회원가입</p>
                        {modalOpen && <Login modalClose={modalClose}></Login>}
                     </div>
                    }
                    
                </StHeader>
            </Layout>
        </Navigator>
    );
};

const Navigator = styled.div`
    width: 100%;
    background-color: #fff;
    box-shadow: rgb(0 0 0 / 3%) 0px 6px 15px 0px, rgb(0 0 0 / 8%) 0px 0px 0px 1px;
`
const StHeader = styled.div`
    height: 80px;
    display: flex;
    padding: 10px 0;
    justify-content: space-between;
    align-items: center;
    >div {
        display: flex;
        p {
            cursor: pointer;
            font-family: 'SUIT-Medium';
            margin-left: 10px;
        }
    }
    >img{
        height: 80px;
        cursor: pointer;
        margin: 10px 0;
    }
    @media screen and (max-width: 600px) {
        padding: 10px 30px;
    }
`


const LoginDiv = styled.div`
    display: flex;
    align-items: center;
    >p {
        margin-right: 20px;
    }
`

export default Header;