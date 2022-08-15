import React from 'react';
import styled from 'styled-components';
import MemeCommentForm from './MemeCommentForm';
import MemeCommentList from './MemeCommentList';
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { __getPost } from "../../redux/modules/post";
import { faThumbsDown } from '@fortawesome/free-regular-svg-icons';
import { __toggleLike } from '../../redux/modules/like';

const MemeContents = () => {
    const { postId } = useParams();
    const dispatch = useDispatch();
    const post = useSelector((state) => state.post.post);
    const { title, userNickname } = post;
    const likeNumber = useSelector((state) => state.like.likeNumber)
    const isLike = useSelector((state) => state.like.isLike)

    useEffect(() => {
        dispatch(__getPost(postId));
      }, [dispatch, postId]);

    const onisLike = () => {
        dispatch(__toggleLike(!isLike))
    }  
    
    return (
        <div>
            <StMemeHeader>
                <div>작성날짜 00/00/00</div>
                <button>삭제하기</button>
            </StMemeHeader>
            <StImgbox>
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
    background-color: ${(props) => props.theme.colors.mainColor};
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
        align-items: center;
        margin-bottom: 10px;
        h1 {
            font-size: ${(props) => props.theme.fontsizes.subtitle}
        }
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
        background-color: ${(props) => props.theme.colors.buttonColor};
        color: ${(props) => props.theme.colors.textColor2};
        padding: 10px 15px;
        border-radius: 15px;
        &:hover {background-color: ${(props) => props.theme.colors.hoverColor};
            color: ${(props) => props.theme.colors.textColor1};
        };
    }
`

export default MemeContents;