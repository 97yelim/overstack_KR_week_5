import React from 'react';
import styled from "styled-components";

const BestTopTenContents = ({ bestpost }) => {
    console.log(bestpost.imageUrl)

    const bestpostUrl = bestpost.imageUrl;
    return (
        <StSlide bestpostUrl={bestpostUrl}/>
    );
};

export default BestTopTenContents;

const StSlide = styled.div`
  height: 300px;
  background-image : ${props => `url(${props.bestpostUrl})`};
  background-color: green;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  margin: 30px 0px;
`