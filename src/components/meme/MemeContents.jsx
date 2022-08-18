import React from 'react';
import styled from 'styled-components';
import MemeCommentForm from './MemeCommentForm';
import MemeCommentList from './MemeCommentList';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { __getPost } from "../../redux/modules/post";

const MemeContents = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post.post);
<<<<<<< Updated upstream
    const { id, title, userNickname } = post;
=======
    const { title, userNickname } = post;
    // const likeNumber = useSelector((state) => state.like.likeNumber)
    const isLike = useSelector((state) => state.like.isLike)
    const likeNumber = useSelector((state) => state.post.like_num)
    const navigate = useNavigate();
    const loginUerNickname = localStorage.getItem('nickname')
    console.log(likeNumber)
>>>>>>> Stashed changes

    useEffect(() => {
        dispatch(__getPost(postId));
        console.log(title)
      }, [dispatch, postId]);


    return (
        <div>
            <StMemeHeader  loginUerNickname={loginUerNickname} userNickname={userNickname}>
                <div>작성날짜 00/00/00</div>
                <button>삭제하기</button>
            </StMemeHeader>
            <StImgbox>
                <StTitle>
                    <div>
                        <h1>{title}</h1>
                        <p><FontAwesomeIcon icon={faThumbsUp} /> 212</p>
                    </div>
                    <div>
                        <p>작성자: {userNickname}</p>
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
<<<<<<< Updated upstream
    background-image: "";
=======
    background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%), ${props => `url(${props.imgUrl})`};
>>>>>>> Stashed changes
    background-position: center;
    background-size: cover;
    background-color: ${(props) => props.theme.colors.mainColor};
    border-radius: 20px;
    margin: 30px auto 130px;
    position: relative;
    @media screen and (max-width: 600px){
        width: 90%;
    }
`

const StTitle = styled.div`
    position: absolute;
    bottom: 0px;
<<<<<<< Updated upstream
    padding: 20px;
=======
    padding: 25px;
    color: #fff;
>>>>>>> Stashed changes
    div {
        width: 560px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        h1 {
            font-size: ${(props) => props.theme.fontsizes.subtitle}
        }
<<<<<<< Updated upstream
        button {
            transition: all 0.3s;
            border: none;
            background-color: ${(props) => props.theme.colors.buttonColor};
            color: ${(props) => props.theme.colors.textColor2};
            padding: 10px 30px;
            border-radius: 15px;
            &:hover {background-color: #fff;
                color: ${(props) => props.theme.colors.textColor1};
            };
=======
        >button {
            background-color: #fff;
            color: #000;
            &:hover{
                background-color: ${(props) => props.theme.colors.hoverColor};
                color: #fff
            }
        }
    }
    @media screen and (max-width: 600px){
        width: 90%;
        div{
            width: 100%;
>>>>>>> Stashed changes
        }
    }
`

const StMemeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    margin: 70px 0;
    button {
        display : ${props => `${props.userNickname}` === `${props.loginUerNickname}` ? `block` : `none`};
        transition: all 0.3s;
        border: none;
        background-color: ${(props) => props.theme.colors.buttonColor};
        color: ${(props) => props.theme.colors.textColor2};
        padding: 10px 15px;
        border-radius: 15px;
        &:hover {background-color: ${(props) => props.theme.colors.hoverColor};
            color: ${(props) => props.theme.colors.textColor1};
        };
    }
    @media screen and (max-width: 600px){
        padding: 10px 30px;
    }
`

export default MemeContents;