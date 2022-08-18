import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import SubComment from './SubComment';
import { __getSubComments } from '../../redux/modules/subComment';
import styled from 'styled-components';

const SubCommentList = ({comment}) => {

    const dispatch = useDispatch();
    const subComments = useSelector((state) => state.subComment.subComments)

    useEffect(() => {
        dispatch(__getSubComments(comment.id));
      }, [dispatch]);


    return (
        <StSubCommentList>
            {subComments.map((subComment) => 
                <SubComment key={subComment.id} subComment={subComment} />
            )}
        </StSubCommentList>
    );
};

const StSubCommentList = styled.div`
    display: flex;
    flex-direction: column;
`
 
export default SubCommentList;