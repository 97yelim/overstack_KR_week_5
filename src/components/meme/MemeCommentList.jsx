import React from 'react';
import MemeComment from './MemeComment';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../../redux/modules/comment';
import { useState } from 'react';

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
        <div>
            {comments.map((comment, index) => 
                <MemeComment 
                    key={index} 
                    comment={comment} 
                    handleClick={handleClick} 
                    isSelected={isButtonSelect[index]} 
                    elementIndex={index}
                    />
            )}
        </div>
    );
};

export default MemeCommentList;