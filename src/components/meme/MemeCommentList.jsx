import React, { useState, useEffect  }from 'react';
import MemeComment from './MemeComment';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../../redux/modules/comment';
import styled from "styled-components";
const MemeCommentList = () => {
    const { postId } = useParams();

    const dispatch = useDispatch();
    const comments = useSelector((state) => state.comment.comments)
    const success = useSelector((state) => state.comment.success)

    useEffect(() => {
        dispatch(__getComments(postId));
      }, [dispatch, postId, success]);

      const [isButtonSelect, setIsButtonSelect] = useState(true)

      const handleClick = (idx) => {
        const newArr = Array(comments.length).fill(false);
        newArr[idx] = true;
        setIsButtonSelect(newArr);
      }


    return (
        <CommentListDiv>
            {comments.map((comment, index) => 
                <MemeComment 
                    key={index} 
                    comment={comment} 
                    handleClick={handleClick} 
                    isSelected={isButtonSelect[index]} 
                    elementIndex={index}
                    />
            )}
        </CommentListDiv>
    );
};


const CommentListDiv = styled.div`
    @media screen and (max-width: 600px) {
        padding: 0 30px;
    }
`

export default MemeCommentList;