import React from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';
import { useNavigate } from 'react-router-dom'

const CreateBanner = () => {
    let navigate = useNavigate();
    
    return (
        <MainBanner>
            <Layout>
                <h2>내가 가진 짤방으로 대회 열기</h2>
                <div>
                    <p>내가 가지고 있는 짤방으로 제목학원 대회를 열어봅시다!</p>
                    <button onClick={()=> navigate("/create")}> 대회 열기 </button>
                </div>
            </Layout>
        </MainBanner>
    );
};

export default CreateBanner;

const MainBanner = styled.div`
    width: 100%;
    font-family: 'SUIT-SemiBold';
    background-image: linear-gradient(to left, #9795f0 0%, #fbc8d4 100%);
    font-size: ${(props) => props.theme.fontsizes.subtitle};
    color:${(props) => props.theme.colors.textColor2};
    padding: 40px 0;
    box-sizing: border-box;
    margin: 100px 0;
    div>div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 30px;
    }
    p{
        font-size: ${(props) => props.theme.fontsizes.contentstext};
    }
    button{
        background-color: ${(props) => props.theme.colors.buttonColor3};
        color:${(props) => props.theme.colors.textColor1} ;
        &:hover{
            background-color: ${(props) => props.theme.colors.mainColor};
            color:${(props) => props.theme.colors.textColor2} ;
        }
    }
    @media screen and (max-width: 600px) {
        padding: 40px 30px;
        p{
            width: 75%;
        }
    }
`
