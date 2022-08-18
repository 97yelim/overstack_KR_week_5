import React  from "react";
import styled from "styled-components";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { __getBestPosts } from "../../redux/modules/post";
import { useSelector } from "react-redux";
import BestTopTenContents from "./BestTopTenContents";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper";



export default function App() {
  const dispatch = useDispatch()
  const bestposts = useSelector((state) => state.post.bestposts)

  useEffect(() => {
    dispatch(__getBestPosts());
  }, [dispatch]);

  console.log(bestposts)


  return (
    <>
      <StSubTitle>#자랑스러운 우수 수강생 작품들 🏆</StSubTitle>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        {bestposts.map((bestpost) => 
          <SwiperSlide key={bestpost.id}><BestTopTenContents key={bestpost.id} bestpost={bestpost}>Slide 1</BestTopTenContents></SwiperSlide>
        )}
      </Swiper>
    </>
  );
}


const StSubTitle = styled.h2`
    font-size: ${(props) => props.theme.fontsizes.subtitle};
    color: ${(props) => props.theme.colors.textColor1};
    padding: 100px 0px 30px;
  `