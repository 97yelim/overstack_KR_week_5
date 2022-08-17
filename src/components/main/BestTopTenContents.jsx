import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from "styled-components";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

const BestTopTenContents = ({ bestpost }) => {
    console.log(bestpost.like_num)
    const bestpostUrl = bestpost.imageUrl;
    return (
        <StSlide bestpostUrl={bestpostUrl}>
            <h3>{bestpost.title}</h3>
            <div>
                <p>{bestpost.userNickname}</p>
                <span><FontAwesomeIcon icon={faThumbsUp}/>{bestpost.like_num}</span>
            </div>
        </StSlide>
    );
};

export default BestTopTenContents;

const StSlide = styled.div`
  height: 300px;
  background-image : ${props => `url(${props.bestpostUrl})`};
  color: #fff;
  background-color: green;
  background-position: center;
  background-size: cover;
  border-radius: 15px;
  margin: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  padding: 10px;
  h3 {
    font-size: ${(props) => props.theme.fontsizes.subtitle};
    margin-bottom: 10px;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
`