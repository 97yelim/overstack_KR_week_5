import React from 'react';
import MemeCommentForm from './MemeCommentForm';
import MemeCommentList from './MemeCommentList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { useState } from 'react';

const MemeCommentView = () => {
    const success = useSelector((state) => state.comment.success)
    const [state, setState] = useState(success);

    console.log(state)

    return (
        <>
            <MemeCommentForm setState={setState}/>
            <MemeCommentList/>
        </>
    );
};

export default MemeCommentView;