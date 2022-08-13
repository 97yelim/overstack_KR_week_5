import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";

const BoardContents = ({id, userNickname, title}) => {
    const navigate = useNavigate();

    const onClickHandler = () => {
        console.log("clicked");
        navigate(`/MemeDetail/${id}`);
    }

    return (
        <div onClick = {onClickHandler}>
            <div>{title}</div>
            <div>{userNickname}</div>
        </div>
    );
};

export default BoardContents;