import styled from "styled-components";


const Layout = (props) => {
    return (
        <ContentsWrap>
            {props.children}
        </ContentsWrap>
    );
};

export default Layout;

const ContentsWrap = styled.div`
    max-width: 1200px;
    margin: 0 auto;
`