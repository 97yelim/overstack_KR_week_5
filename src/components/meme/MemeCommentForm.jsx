import React from 'react';
import styled from 'styled-components';

const MemeCommentForm = () => {
    return (
        <StMemeCommentForm>
            <div>
                <StLabel>댓글</StLabel>
                <StInput placeholder='댓글을 입력하세요' />
            </div>
            <StButton>입력하기</StButton>
        </StMemeCommentForm>
    );
};

const StMemeCommentForm = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 30px 10px;
    align-items: flex-end;
    border-bottom: 1px solid #efefef;
`
const StLabel = styled.div`
    display: block;
    font-size: 30px;
    margin-bottom: 10px;
`

const StInput = styled.input`
    width: 700px;
    background-color: #efefef;
    border: none;
    padding: 10px 15px;
    border-radius: 15px;
`

const StButton = styled.button`
    transition: all 0.3s;
    padding: 10px 15px;
    border-radius: 15px;
    border: none;
    color: ${(props) => props.theme.colors.textColor2};
    background-color: ${(props) => props.theme.colors.buttonColor};
    &:hover {
        color: ${(props) => props.theme.colors.textColor1};
        background-color: ${(props) => props.theme.colors.mainColor};
    }
`


export default MemeCommentForm;