import React from 'react';
import styled from 'styled-components';
import MemeCommentForm from './MemeCommentForm';
import MemeCommentList from './MemeCommentList';

const MemeContents = () => {
    return (
        <div>
            <StMemeHeader>
                <div>작성날짜 00/00/00</div>
                <button>삭제하기</button>
            </StMemeHeader>
            <StImgbox></StImgbox>
            <MemeCommentForm/>
            <MemeCommentList/>
        </div>
    );
};

const StImgbox = styled.div`
    width: 600px;
    height: 600px;
    background-image: "";
    background-position: center;
    background-size: cover;
    background-color: green;
    border-radius: 20px;
    margin: 0 auto;
`
const StMemeHeader = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 10px;
`

export default MemeContents;