import React from 'react';
import MemeComment from './MemeComment';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
<<<<<<< Updated upstream
=======
import { useSelector, useDispatch } from 'react-redux';
import { __getComments } from '../../redux/modules/comment';
import { useState } from 'react';
import styled from "styled-components";
>>>>>>> Stashed changes

const MemeCommentList = () => {
    const [comments, setComments] = useState(null);
    const { postId } = useParams();
    const getComments = async () => {
        const { data } = await axios.get(`http://localhost:3001/comments?postId=${postId}`);
        setComments(data);
    }
    useEffect(() => {
        getComments();
    }, [])

    return (
<<<<<<< Updated upstream
        <div>
            {comments && comments.map((comment) => 
                <MemeComment key={comment.id} comment={comment}/>
=======
        <CommentListDiv>
            {comments.map((comment, index) => 
                <MemeComment 
                    key={index} 
                    comment={comment} 
                    handleClick={handleClick} 
                    isSelected={isButtonSelect[index]} 
                    elementIndex={index}
                    />
>>>>>>> Stashed changes
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