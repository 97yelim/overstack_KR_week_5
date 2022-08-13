import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'SUIT-Medium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-Medium.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'SUIT-SemiBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_suit@1.0/SUIT-SemiBold.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}

@font-face {
    font-family: 'GmarketSansBold';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}


*{font-family: 'SUIT-Medium';}
p,span {
    font-size: ${(props) => props.theme.fontsizes.contentstext};
}

button {
    padding: 10px 20px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    transition: all .3s;
    font-family: 'SUIT-SemiBold';
    &:hover{
        background-color:${(props) => props.theme.colors.hoverColor};
    }
}

input {
    width: 100%;
    padding: 10px 20px;
    box-sizing: border-box;
    border-radius: 50px;
    background-color:${(props) => props.theme.colors.boxColor};
    border: none;
}
`;

export default GlobalStyle;