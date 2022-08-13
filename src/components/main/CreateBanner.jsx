import React from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';

const CreateBanner = () => {
    return (
        <MainBanner>
            <Layout>
                <h2>내가 가진 짤방으로 대회 열기</h2>
            </Layout>
        </MainBanner>
    );
};

export default CreateBanner;

const MainBanner = styled.div`
    width: 100%;
    background-color: ${(props) => props.theme.colors.subColor};
    font-size: ${(props) => props.theme.fontsizes.subtitle};
    color:${(props) => props.theme.colors.textColor2};
    padding: 40px 0;
    box-sizing: border-box;
`