import React from 'react';
import MemeComment from './MemeComment';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../../redux/modules/comment';

const MemeCommentList = () => {
    const { postId } = useParams();
    const dispatch = useDispatch()
    const comments = useSelector((state) => state.comment.comments)
    
    useEffect(() => {
        dispatch(__getComments(postId));
    }, [dispatch, postId])

    return (
        <div>
            {comments && comments.map((comment) => 
                <MemeComment key={comment.id} comment={comment}/>
            )}
        </div>
    );
};

export default MemeCommentList;