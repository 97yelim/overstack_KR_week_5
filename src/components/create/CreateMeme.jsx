import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

const CreateMeme = () => {
    const [files, setFiles] = useState(''); // 파일 프리뷰 state 작성 
    const onLoadFile = (e) => {
        const file = e.target.files;
        console.log(file)
        setFiles(file)
    }
    useEffect(()=>{
        preview();

        return()=>preview();
    });

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
        <Createform>
            <p>짤방 제목 등록하기</p>
            <div>
                <label htmlFor="">제목</label>
                <input 
                    type='text'
                    name='title'
                    placeholder='제목을 지어주세요.'
                    />
            </div>
            <div>
            <label htmlFor="">이미지 선택하기</label>
            <input type="file" id="image" accept='image/*' onChange={onLoadFile} />
           
            <span>권장 이미지 크기 : 850px * 850px</span>
            <ImgPreview id='imgPreview'></ImgPreview>

            </div>
            <button>게시하기</button>
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