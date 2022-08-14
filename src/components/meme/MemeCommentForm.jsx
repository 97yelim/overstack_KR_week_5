import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useForm } from "react-hook-form"
import axios from 'axios';

const MemeCommentForm = () => {
    const { postId } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const black_pattern = /^\s+|\s+$/g;
    const isBlank = (value) => (
        value.replace(black_pattern, '') === "" ? false : true
    )

    const onSubmit = (data) => {
        const new_comment = {
            postId: parseInt(postId),
            userCommented: "퉁퉁이",
            comment: data.comment
        }
        const postComments = async () => {
            const response = await axios.post('http://localhost:3001/comments', new_comment);
        }
        postComments()
        reset({ comment: " " })
    }
    const onError = (errors, e) => console.log(errors, e);

    return (
        <StMemeCommentForm onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <StLabel>댓글</StLabel>
                <StInput 
                    type="text"
                    placeholder='30자 이내'
                    {...register("comment", { required: true, maxLength: 30, validate:
                        value => isBlank(value)
                    })}
                />
                    {errors.comment && errors.comment.type === "required" && <p>댓글 내용을 입력해 주세요~</p>}
                    {errors.comment && errors.comment.type === "maxLength" && <p>댓글 내용이 너무 길어요 ㅜㅜ</p>}
                    {errors.comment && errors.comment.type === "validate" && <p>공백만 입력되었어요!</p>}
            </div>
            <StButton>입력하기</StButton>
        </StMemeCommentForm>
    );
};

const StMemeCommentForm = styled.form`
    display: flex;
    justify-content: space-between;
    padding: 30px 10px;
    align-items: flex-end;
    border-bottom: 1px solid #efefef;
    div {
        p {
            color: red;
        }
    }
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
    margin-bottom: 10px;
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