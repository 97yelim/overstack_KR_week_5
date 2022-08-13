
const colors = {
    mainColor: "#FFC011",
    subColor: "#5084FF",
    textColor1: "#000",
    textColor2:"#fff",
    iconColor1: "#000",
    iconColor2: "#fff",
    buttonColor:"#000",
    hoverColor:"#FFC011",
    boxColor:"#f8f8fc"
}

//반응형을 위해 픽셀을 rem으로 컨버팅해주는 함수
const pixelToRem = (size) => `${size / 16}rem`; 

const fontsizes = {
  title :pixelToRem(60),
  subtitle: pixelToRem(40),
  contentstext: pixelToRem(18)
}

const theme = {
    colors,
    fontsizes
  };
  
  export default theme; 
