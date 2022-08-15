import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { __getPost } from "../../redux/modules/post";
import BoardContents from './BoardContents';

const BoardLayout = () => {
    const dispatch = useDispatch();

    const allPosts = useSelector((state) => state.post.posts);
    const isLoading = useSelector((state) => state.post.isLoading);
    const success = useSelector((state) => state.post.success);
    const error = useSelector((state) => state.post.error);

    useEffect(() => {
        dispatch(__getPost());
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
            {isLoading ? <p>In Loading...</p> : null}
            {error ? <p>{error.message}</p> : null}
            {!isLoading && !error ? posts : null}
        </div>
    );
};

export default BoardLayout;