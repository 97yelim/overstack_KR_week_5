import React from 'react';
import MemeComment from './MemeComment';
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

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
        <div>
            {comments && comments.map((comment) => 
                <MemeComment key={comment.id} comment={comment}/>
            )}
        </div>
    );
};

export default MemeCommentList;