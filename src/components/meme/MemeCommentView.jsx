import React from 'react';
import MemeCommentForm from './MemeCommentForm';
import MemeCommentList from './MemeCommentList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';

const MemeCommentView = () => {
    return (
        <>
            <MemeCommentForm/>
            <MemeCommentList/>
        </>
    );
};

export default MemeCommentView;