import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const Header = () => {
    return (
        <Navigator>
            <Layout>
                <StHeader>
                    <img src="" alt="" />
                    <div>
                        <p>로그인</p>
                        <p>회원가입</p>
                    </div>
                </StHeader>
            </Layout>
        </Navigator>
    );
};

const Navigator = styled.div`
    width: 100%;
`
const StHeader = styled.div`
    display: flex;
    padding: 10px;
    justify-content: space-between;
    div {
        display: flex;
        p {
            margin-left: 10px;
        }
    }
`

export default Header;