import React from 'react';
import SubCommentForm from './SubCommentForm';
import SubCommentList from './SubCommentList';
import styled from 'styled-components';

const SubCommentView = ({ comment }) => {
    return (
        <StSubCommentView>
            <SubCommentForm comment={comment}/>
            <SubCommentList comment={comment}/>
        </StSubCommentView>
    );
};

const StSubCommentView = styled.div`
    display: flex;
    flex-direction: column;
`

export default SubCommentView;