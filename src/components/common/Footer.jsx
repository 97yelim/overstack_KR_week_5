import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
const Footer = () => {
    return (
        <FooterDiv>
            <Layout>
                <div>
                    <ul>
                        <li>FE : ✨ 박수원, ✨ 김예림 // BE : ✨ 조원영, ✨ 강지영</li>
                        <li>COPYRIGHT © 박수원, 김예림, 조원영, 강지영 rights reserved</li>
                    </ul>
                </div>
            </Layout>
        </FooterDiv>
    );
};

export default Footer;


const FooterDiv = styled.div`
    border-top: 1px solid #efefef;
    li{
        margin: 25px 0 ;
    }
`