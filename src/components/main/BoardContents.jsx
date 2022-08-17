import React from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";

const BoardContents = ({id, userNickname, title}) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        console.log("clicked");
        navigate(`/MemeDetail/${id}`);
    }

    return (
        <StContentsBox onClick = {onClickHandler}>
            <StThumbnailBox>
                <StThumbnail></StThumbnail>
                <ul>
                    <StNickanme>{userNickname}</StNickanme>
                    <StTitle>{title}</StTitle>
                </ul>
            </StThumbnailBox>
            <StNumberBox>
                <div><FontAwesomeIcon icon={faComment}/> 0</div>
                <div><FontAwesomeIcon icon={faThumbsUp}/> 0</div>
            </StNumberBox>
        </StContentsBox>
    );
};

const StContentsBox = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 10px;
    border-bottom: 1px solid #efefef;
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.boxColor};
`
const StThumbnailBox = styled.div`
    display: flex;
    align-items: center;
`

const StThumbnail = styled.div`
    width: 100px;
    height: 100px;
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: 15px;
    margin-right: 20px;
`
const StNickanme = styled.li`
    font-size: ${(props) => props.theme.fontsizes.contentstext};
    margin-bottom: 10px;
`

const StTitle = styled.li`
    font-size: ${(props) => props.theme.fontsizes.subtitle2}
`

const StNumberBox = styled.div`
    display: flex;
    align-items: center;
    div {
        margin-left: 30px;
    }
`


export default BoardContents;