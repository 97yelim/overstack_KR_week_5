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
    background-color: ${(props) => props.theme.colors.subColor};
    font-size: ${(props) => props.theme.fontsizes.subtitle};
    color:${(props) => props.theme.colors.textColor2};
    padding: 40px 0;
    box-sizing: border-box;
    div>div {
        display: flex;
        justify-content: space-between;
        margin-top: 30px;
    }
    p{
        font-size: ${(props) => props.theme.fontsizes.contentstext};
    }
    
`
