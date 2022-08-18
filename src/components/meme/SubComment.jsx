import React from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import { useDispatch } from 'react-redux/es/exports';
import { useParams } from 'react-router-dom';
import { __deleteSubComment, __editSubComment } from '../../redux/modules/subComment';

const SubComment = ({ subComment }) => {
    const [subCommentNum, setSubCommentNum] = useState(-1);
    const dispatch = useDispatch();
    const [subComments, setSubComments] = useState("");
    const { postId } = useParams()


    const black_pattern = /^\s+|\s+$/g;

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setSubComments(value);
        console.log(subComment.id)
    }

    const onEditComment = (subComment_id) => {
        if (!subComments) {
            alert("내용이 비어있습니다.");
            return;
        }
        if (subComments.replace(black_pattern, '') === "") {
            alert("공백만 입력되었습니다");
            return;
        }
        const edit_subComment = {
            subComment_id,
            edit_body: {
                // postId: postId,
                contents: subComments,
                // userSubCommented: "퉁퉁이",
                // commentId: subComment.commentId
            }
        }
        dispatch(__editSubComment(edit_subComment));
        setSubCommentNum(-1);
        setSubComments("");
    }

    const onDelete = (subComment_id) => {
        console.log(subComment.id)
        dispatch(__deleteSubComment(subComment_id))
    }

    return (
        <>
            {subCommentNum !== subComment.id ? (
                <StSubComment>
                    <div>
                        <div>{subComment.userSubCommented}</div>
                        <div>
                            <StButton onClick={() => setSubCommentNum(subComment.id)}>수정</StButton>
                            <StButton onClick={() => onDelete(subComment.id)}>삭제</StButton>
                        </div>
                    </div>
                    <div>
                        <div>{subComment.subComment}</div>
                    </div>
                </StSubComment>
            ) : (
                <StSubComment>
                    <div>
                        <StInput
                            type="text"
                            placeholder='30자 이내'
                            maxLength={30}
                            value={subComments}
                            onChange={onChangeHandler}
                        />
                        <div>
                            <StButton onClick={() => onEditComment(subComment.id)} >수정 완료</StButton>
                            <StButton type='button' onClick={() => setSubCommentNum(-1)}>취소</StButton>
                        </div>
                    </div>
                </StSubComment>
            )}
        </>
    );
};

const StSubComment = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 30px;
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
    margin-left: 10px;
    background-color: #cdcdcd;
`
const StInput = styled.input`
    width: 80%;
`

export default SubComment;