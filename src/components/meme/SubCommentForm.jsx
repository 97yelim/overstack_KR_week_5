import React from 'react';
import { useForm } from "react-hook-form"
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { __createSubComment } from '../../redux/modules/subComment';

const SubCommentForm = ({ comment }) => {
    const { postId } = useParams();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const dispatch = useDispatch()

    const black_pattern = /^\s+|\s+$/g;
    const isBlank = (value) => (
        value.replace(black_pattern, '') === "" ? false : true
    )

    const onSubmit = (data) => {
        const new_subComment = {
            postId: parseInt(postId),
            userSubCommented: "퉁퉁이",
            subComment: data.subComment,
            commentId: comment.id
        }

        dispatch(__createSubComment(new_subComment));        
        reset({ subComment: " " })
    }
    
    const onError = (errors, e) => console.log(errors, e);

    return (
        <div>
            <StSubCommentForm onSubmit={handleSubmit(onSubmit, onError)}>
                <div>
                    <StInput
                        type="text"
                        placeholder='30자 이내'
                        {...register("subComment", {
                            required: true, maxLength: 30, validate:
                                value => isBlank(value)
                        })}
                    />
                    {errors.subComment && errors.subComment.type === "required" && <p>댓글 내용을 입력해 주세요~</p>}
                    {errors.subComment && errors.subComment.type === "maxLength" && <p>댓글 내용이 너무 길어요 ㅜㅜ</p>}
                    {errors.subComment && errors.subComment.type === "validate" && <p>공백만 입력되었어요!</p>}
                </div>
                <StButton>입력하기</StButton>
            </StSubCommentForm>
        </div>
    );
};

const StSubCommentForm = styled.form`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1150px;
    div {
        display: flex;
        flex-direction: column;
        p {
            color: red;
        }
    }
    @media screen and (max-width: 600px){
        width: 90%;
    }
`

const StInput = styled.input`
    width: 700px;
    margin-bottom: 20px;
    @media screen and (max-width: 800px){
        width: 100%;
        align-items: center;
        margin: 0;
    }
`

const StButton = styled.button`
    background-color: #cdcdcd;
`

export default SubCommentForm;