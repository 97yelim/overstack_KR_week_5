import React from 'react';

const BestTopTenContents = () => {
    return (
        <div>
            
        </div>
    );
};

<<<<<<< Updated upstream
export default BestTopTenContents;
=======
export default BestTopTenContents;

const StSlide = styled.div`
  height: 300px;
  background : linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 40%, rgba(0,0,0,0) 100%), ${props => `url(${props.bestpostUrl})`};
  color: #fff;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 20px;
  h3 {
    font-size: ${(props) => props.theme.fontsizes.subtitle2};
    margin-bottom: 10px;
    word-spacing: 10px;
    letter-spacing: 2px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`
>>>>>>> Stashed changes
