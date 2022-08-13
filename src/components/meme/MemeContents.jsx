import React from 'react';
import styled from 'styled-components';
import MemeCommentForm from './MemeCommentForm';
import MemeCommentList from './MemeCommentList';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const MemeContents = () => {
    return (
        <div>
            <StMemeHeader>
                <div>작성날짜 00/00/00</div>
                <button>삭제하기</button>
            </StMemeHeader>
            <StImgbox>
                <StTitle>
                    <div>
                        <h1>초기 타이틀이 들어갑니다</h1>
                        <p><FontAwesomeIcon icon={faThumbsUp} /> 212</p>
                    </div>
                    <div>
                        <p>작성자: 도라에몽</p>
                        <button><FontAwesomeIcon icon={faThumbsUp}/></button>
                    </div>
                </StTitle>
            </StImgbox>
            <MemeCommentForm />
            <MemeCommentList />
        </div>
    );
};

const StImgbox = styled.div`
    width: 600px;
    height: 600px;
    background-image: "";
    background-position: center;
    background-size: cover;
    background-color: ${(props) => props.theme.mainColor};
    border-radius: 20px;
    margin: 0 auto;
    position: relative;
`
const StTitle = styled.div`
    position: absolute;
    bottom: 0px;
    padding: 20px;
    div {
        width: 560px;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        h1 {
            font-size: 25px;
            font-weight: bold;
        }
        button {
            transition: all 0.3s;
            border: none;
            background-color: ${(props) => props.theme.buttonColor};
            color: ${(props) => props.theme.textColor2};
            padding: 10px 30px;
            border-radius: 15px;
            &:hover {background-color: #fff;
                color: ${(props) => props.theme.textColor1};
            };
        }
    }
`

const StMemeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    button {
        transition: all 0.3s;
        border: none;
        background-color: ${(props) => props.theme.buttonColor};
        color: ${(props) => props.theme.textColor2};
        padding: 10px 15px;
        border-radius: 15px;
        &:hover {background-color: ${(props) => props.theme.hoverColor};
            color: ${(props) => props.theme.textColor1};
        };
    }
`

export default MemeContents;