import React from 'react';
import styled from 'styled-components';

const MemeComment = ({comment}) => {


<<<<<<< Updated upstream
    return (
        <StMemeComment>
            <div>
                <div>{comment.userCommented}</div>
                <div>
                    <StButton>수정</StButton>
                    <StButton>삭제</StButton>
                </div>
            </div>
            <div>
                <div>{comment.comment}</div>
                <StButton>답글</StButton>
            </div>
        </StMemeComment>
=======
    const black_pattern = /^\s+|\s+$/g;

    const onChangeHandler = (e) => {
        const value = e.target.value;
        setComments(value);
    }

    const onEditComment = (comment_id) => {
        if (!comments) {
            alert("내용이 비어있습니다.");
            return;
        }
        if (comments.replace(black_pattern, '') === "") {
            alert("Only spaces were entered in the comments");
            return;
        }
        const edit_comment = {
            comment_id,
            edit_body: {
                postId: parseInt(postId),
                comment: comments,
                userCommented: comment.username,
                commentOwner :comment.commentOwner
            }
        }
        dispatch(__editComment(edit_comment));
        setCommentNum();
        setComments("");
        dispatch(__getComments(postId))
    }
    const commentOwner = comment.commentOwner
    const onDelete = (comment_id) => {
        dispatch(__deleteComment(comment_id))
    }

    return (
        <>
            {commentNum !== comment.id ? (
                <StMemeComment>
                    <div>
                        <div>{comment.userCommented}</div>
                        <div>
                            <StButton commentOwner={commentOwner} onClick={() => setCommentNum(comment.id)}>수정</StButton>
                            <StButton  commentOwner={commentOwner} onClick={() => onDelete(comment.id)}>삭제</StButton>
                        </div>
                    </div>
                    <div>
                        <div>{comment.comment}</div>
                        <SubButton onClick={() => handleClick(elementIndex)}>답글{comment.subComment_num}</SubButton>
                    </div>
                    {isSelected ? <SubCommentView comment={comment}/> : null }
                </StMemeComment>
            ) : (
                <StMemeComment>
                    <div>
                        <StInput
                            type="text"
                            placeholder='30자 이내'
                            maxLength={30}
                            value={comments}
                            onChange={onChangeHandler}
                        />
                        <div>
                            <StButton onClick={() => onEditComment(comment.id)} >수정 완료</StButton>
                            <StButton type='button' onClick={() => setCommentNum(-1)}>취소</StButton>
                        </div>
                    </div>
                </StMemeComment>
            )}
        </>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    &:hover {
        color: ${(props) => props.theme.colors.textColor1};
        background-color: ${(props) => props.theme.colors.mainColor};
    }
=======
    display: ${props => `${props.commentOwner}` ? 'none' : 'block'};
`

const SubButton = styled.button`
    transition: all 0.3s;
    padding: 10px 15px;
    border-radius: 15px;
    border: none;
    margin-left: 10px;
>>>>>>> Stashed changes
`

export default MemeComment;