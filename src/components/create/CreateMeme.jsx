import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { __createPost } from '../../redux/modules/post';
import styled from 'styled-components';

const CreateMeme = () => {
    const [files, setFiles] = useState(''); // 파일 프리뷰 state 작성 
    const [title, setTitle] = useState('') //제목 state 
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeHandler = (e) => {
        const id = e.target.id;
        const value = e.target.value;
        console.log(id)
        if(!value) {
            return 
        }else{
            if(id === 'title') setTitle(value);
        }
    };

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (!title){
            return alert('이봐 친구!! 제목이 비어있어!! 다시 확인해봐!')
        };
        const new_post = {
            title
        }
        dispatch(__createPost(new_post));
        navigate('/main');
    }
    

    useEffect(()=>{
        preview();

        return()=>preview();
    });


    const onLoadFile = (e) => {
        const file = e.target.files;
        console.log(file)
        setFiles(file)
    }

    const preview = () =>{
        if(!files) return false;
        const imgEl = document.querySelector('#imgPreview')
        const reader = new FileReader();

        reader.onload = () =>
            (imgEl.style.backgroundImage = `url(${reader.result})`,
            imgEl.style.backgroundSize = "cover");
        reader.readAsDataURL(files[0])
        console.log(reader)
    }
    
      
    return (
        <Createform  onSubmit={onSubmitHandler}>
            <p>짤방 제목 등록하기</p>
            <div>
                <label htmlFor="">제목</label>
                <input 
                    type='text'
                    id = 'title'
                    placeholder='제목을 지어주세요.'
                    onChange={onChangeHandler}
                    />
            </div>
            <div>
            <label htmlFor="">이미지 선택하기</label>
            <input type="file" id="image" accept='image/*' onChange={onLoadFile} />
           
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