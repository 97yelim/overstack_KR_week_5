import React, { useState } from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import Login from '../modal/Login';

const Header = (props) => {
    const [modalOpen, setModalOpen] = useState(false)
    const modalClose = () => {
        setModalOpen(!modalOpen)

    }

    return (
        <Navigator>
            <Layout>
                <StHeader>
                    <img src="" alt="" />
                    <div>
                        <p onClick={modalClose}>로그인 ˑ 회원가입</p>
                        {modalOpen && <Login modalClose={modalClose}></Login>}
                    </div>
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
    padding: 10px;
    justify-content: space-between;
    align-items: center;
    >div {
        display: flex;
        p {
            cursor: pointer;
            margin-left: 10px;
        }
    }
`

export default Header;