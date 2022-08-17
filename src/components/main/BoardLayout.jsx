import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { __getPosts } from "../../redux/modules/post";
import BoardContents from './BoardContents';
import styled from 'styled-components';

const BoardLayout = () => {
    const dispatch = useDispatch();

    const allPosts = useSelector((state) => state.post.posts);
    const isLoading = useSelector((state) => state.post.isLoading);
    const success = useSelector((state) => state.post.success);
    const error = useSelector((state) => state.post.error);

    useEffect(() => {
        dispatch(__getPosts());
    }, [dispatch]);

    const posts = allPosts.map((post) => (
        <BoardContents
            key={post.id}
            id={post.id}
            userNickname={post.userNickname}
            title={post.title}
        />
    ))


    return (
        <div>
            <StSubTitle>#제목 대학 수강생 작품들👨‍🏫</StSubTitle>
            {isLoading ? <p>In Loading...</p> : null}
            {error ? <p>{error.message}</p> : null}
            {!isLoading && !error ? posts : null}
        </div>
    );
};

const StSubTitle = styled.h2`
    font-size: ${(props) => props.theme.fontsizes.subtitle};
    color: ${(props) => props.theme.colors.textColor1};
    padding: 60px 0px 30px 0px;
    border-bottom: 1px solid #efefef;
`

export default BoardLayout;