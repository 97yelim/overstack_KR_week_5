import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const Footer = () => {
    return (
        <FooterDiv>
            <Layout>
                <div>
                    <ul>
                        <li>프로젝트를 함께 해준 멋진 조원들 😚</li>
                        <li>FE : <a href="https://github.com/kksltv123" target="_blank"> <FontAwesomeIcon icon={faGithub} className="search" /> ✨ 박수원</a> , <a href="https://github.com/97yelim" target="_blank"> <FontAwesomeIcon icon={faGithub} className="search" /> ✨ 김예림</a>  </li>
                        <li>BE : <a href="https://github.com/ckstn0225" target="_blank"> <FontAwesomeIcon icon={faGithub} className="search" /> ✨ 조원영</a> , <a href="https://github.com/picjoy" target="_blank"> <FontAwesomeIcon icon={faGithub} className="search" /> ✨ 강지영</a> , <a href="">✨ 김재경</a> </li>
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
    a {
        padding: 4px 5px;
        border-radius: 5px;
        background-color: #f8f8ff ;
        color: #b24cff;
        text-decoration: none;
        transition: all .3s;
        &:hover{
            background: linear-gradient(to right, #9795f0,#fbc8d4);
            color:#fff;
            animation-duration: 10s;
            animation-iteration-count: infinite;
            animation-direction: alternate;
            animation-timing-function: linear;
            animation-name: fluid;
        }
    }
    li{
        margin: 25px 0 ;
    }
`