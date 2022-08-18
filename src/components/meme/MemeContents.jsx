import React from 'react';
import styled from 'styled-components';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { __deletePost, __getPost } from "../../redux/modules/post";
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { __toggleLike } from '../../redux/modules/like';
import { useNavigate } from 'react-router-dom';
import MemeCommentView from './MemeCommentView';


const MemeContents = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post.post);
    const { title, userNickname } = post;
    const isLike = useSelector((state) => state.like)
    const likeNumber = useSelector((state) => state.post.post.like_num)
    const navigate = useNavigate();
    const loginUerNickname = localStorage.getItem('nickname')

    useEffect(() => {
        dispatch(__getPost(postId));
      }, [dispatch, postId, isLike]);

    const onisLike = async() => {
        dispatch(__toggleLike(postId))
    }
    
    const onDeleteHandler = () => {
        let answer = window.confirm("정말 지울 거예요??");
        if (!answer) return;
        dispatch(__deletePost(postId))
        navigate("/main")
    }
    
    return (
        <div>
            <StMemeHeader  loginUerNickname={loginUerNickname} userNickname={userNickname}>
                <div>작성날짜 00/00/00</div>
                <button onClick={onDeleteHandler}>삭제하기</button>
            </StMemeHeader>
            <StImgbox imgUrl = {post.imageUrl}>
                <StTitle>
                    <div>
                        <h1>{title}</h1>
                        {isLike ? (<p><FontAwesomeIcon icon={faThumbsUp} />{likeNumber}</p>)
                            :(<p><FontAwesomeIcon icon={faThumbsDown} />{likeNumber}</p>)}
                    </div>
                    <div>
                        <p>작성자: {userNickname}</p>
                        {isLike ? (<button onClick={onisLike}><FontAwesomeIcon icon={faThumbsUp} /></button>) 
                            : (<button onClick={onisLike}><FontAwesomeIcon icon={faThumbsDown} /></button>)}
                    </div>
                </StTitle>
            </StImgbox>
            <MemeCommentView/>
        </div>
    );
};

const StImgbox = styled.div`
    width: 600px;
    height: 600px;

    background:linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%), ${props => `url(${props.imgUrl})`};
    background-position: center;
    background-size: cover;
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
    padding: 25px;
    color: #fff;
    div {
        width: 560px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
        h1 {
            font-size: ${(props) => props.theme.fontsizes.subtitle}
        }
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
        padding: 10px 15px;
    }
    @media screen and (max-width: 600px){
        padding: 10px 30px;
    }
`

export default MemeContents;