import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/post";
import BoardContents from './BoardContents';
import styled from 'styled-components';

const BoardLayout = () => {
    const dispatch = useDispatch();

    const allPosts = useSelector((state) => state.post.posts);
    const isLoading = useSelector((state) => state.post.isLoading);
    const error = useSelector((state) => state.post.error);

    useEffect(() => {
        console.log(allPosts)
        dispatch(__getPosts());
    }, [dispatch]);

    const posts = allPosts.map((post) => (
        <BoardContents
            key={post.id}
            id={post.id}
            userNickname={post.userNickname}
            title={post.title}
            imageUrl={post.imageUrl}
            comment_num={post.comment_num}
        />
    ))


    return (
        <CommentListDiv>
            <StSubTitle>#제목 대학 수강생 작품들👨‍🏫</StSubTitle>
            {isLoading ? <p>In Loading...</p> : null}
            {error ? <p>{error.message}</p> : null}
            {!isLoading && !error ? posts : null}
        </CommentListDiv>
    );
};

const StSubTitle = styled.h2`
    font-size: ${(props) => props.theme.fontsizes.subtitle};
    color: ${(props) => props.theme.colors.textColor1};
    padding: 60px 0px 30px 0px;
    border-bottom: 1px solid #efefef;
`
const CommentListDiv = styled.div`
     @media screen and (max-width: 600px) {
        padding: 0 30px;
    }
`

export default BoardLayout;