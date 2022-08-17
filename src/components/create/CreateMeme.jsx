import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import styled from 'styled-components';
import axios from 'axios';

const CreateMeme = () => {
    const [files, setFiles] = useState(''); // 파일 프리뷰 state 작성 
    const [title, setTitle] = useState('') //제목 state 
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        if (!value) {
            return
        } else {
            if (id === 'title') setTitle(value);
        }
    };

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        if (!title) {
            return alert('이봐 친구!! 제목이 비어있어!! 다시 확인해봐!')
        };
        const form = document.getElementById('form');

        const formData = new FormData(form);

        console.log([...formData])

        try {
            const res = await axios.post('http://localhost:3001/posts', formData)
            console.log(res)
        } catch (err) {
            console.log(err);
        }

        navigate('/main');
    }


    useEffect(() => {
        preview();

        return () => preview();
    });


    const onLoadFile = (e) => {
        setFiles(e.target.files[0]);

    }
    const preview = () => {
        if (!files) return false;
        const imgEl = document.querySelector('#imgPreview')
        const reader = new FileReader();

        reader.onload = () =>
        (imgEl.style.backgroundImage = `url(${reader.result})`,
            imgEl.style.backgroundSize = "cover",
            imgEl.style.backgroundPosition = "center");
        reader.readAsDataURL(files)
    }


    return (
        <Createform onSubmit={onSubmitHandler} id="form">
            <p>짤방 제목 등록하기</p>
            <div>
                <label htmlFor="title">제목</label>
                <input
                    type='text'
                    id='title'
                    name='title'
                    placeholder='제목을 지어주세요.'
                    onChange={onChangeHandler}
                />
            </div>
            <div>
                <label htmlFor="file">이미지 선택하기</label>
                <input 
                    type="file" 
                    id="image" 
                    name='file' 
                    accept='image/*' 
                    onChange={onLoadFile} 
                />
                <span>권장 이미지 크기 : 600px * 600px</span>
                <ImgPreview id='imgPreview'></ImgPreview>
            </div>
            <button onClick={onSubmitHandler}>게시하기</button>
        </Createform>
    );
};

export default CreateMeme;

const Createform = styled.form`
    width: 600px;
    margin: 0 auto;
    >p {
        margin: 100px 0 50px;
        font-size: ${(props) => props.theme.fontsizes.subtitle};
        font-family: 'SUIT-SemiBold';
    }
    span{
        color:${(props) => props.theme.colors.subColor2};
        font-size: 14px;
        line-height: 50px;
    }
    label{
        display: block;
        margin: 20px 0;
        font-size: ${(props) => props.theme.fontsizes.subtitle2};
    }
    button {
        margin-top: 30px;
        margin-bottom: 100px;
    }
    input{
        margin-bottom: 30px;
    }
`

const ImgPreview = styled.div`
    width: 600px;
    height: 600px;
    background-color:${(props) => props.theme.colors.boxColor};
    border-radius: 40px;
`