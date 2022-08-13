import React from 'react';
import styled from 'styled-components';

const MemeComment = () => {
    return (
        <StMemeComment>
            <div>
                <div>노진구</div>
                <div>
                    <StButton>수정</StButton>
                    <StButton>삭제</StButton>
                </div>
            </div>
            <div>
                <div>ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ</div>
                <StButton>답글</StButton>
            </div>
        </StMemeComment>
    );
};

const StMemeComment = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #efefef;
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
`

const StButton = styled.button`
    transition: all 0.3s;
    padding: 10px 15px;
    border-radius: 15px;
    border: none;
    color: ${(props) => props.theme.colors.textColor2};
    background-color: ${(props) => props.theme.colors.buttonColor};
    margin-left: 10px;
    &:hover {
        color: ${(props) => props.theme.colors.textColor1};
        background-color: ${(props) => props.theme.colors.mainColor};
    }
`

export default MemeComment;