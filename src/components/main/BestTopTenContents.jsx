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
