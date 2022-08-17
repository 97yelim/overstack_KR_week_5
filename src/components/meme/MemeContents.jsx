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
    const likeNumber = useSelector((state) => state.like.likeNumber)
    const isLike = useSelector((state) => state.like.isLike)
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(__getPost(postId));
      }, [dispatch, postId]);

    const onisLike = () => {
        dispatch(__toggleLike(!isLike))
    }
    
    const onDeleteHandler = () => {
        let answer = window.confirm("정말 지울 거예요??");
        if (!answer) return;
        dispatch(__deletePost(postId))
        navigate("/main")
    }
    
    return (
        <div>
            <StMemeHeader>
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
    background-image: ${props => `url(${props.imgUrl})`};
    background-position: center;
    background-size: cover;
    border-radius: 20px;
    margin: 0 auto;
    position: relative;
`
const StTitle = styled.div`
    position: absolute;
    bottom: 0px;
    padding: 20px;
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
    }
`

const StMemeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
    button {
        transition: all 0.3s;
        border: none;
        padding: 10px 15px;
    }
`

export default MemeContents;