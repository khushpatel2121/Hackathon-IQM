import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import styled from "styled-components";
import "./Bslider.css";

// import required modules
import { Pagination } from "swiper/modules";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 10px;
  padding: 20px;
`;
const Info = styled.div`
  display: flex;
  z-index: 3;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.7);
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  opacity: 0;
  gap: 10px;
`;

const ImageContainer = styled.div`
  &:hover ${Info} {
    opacity: 1;
  }
`;

const Title = styled.div`
  font-size: 15px;
`;

const Author = styled.div`
  font-size: 15px;
`;

const Desc = styled.div`
  font-size: 10px;
`;

const Price = styled.div`
  font-size: 20px;
`;

const Image = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={40}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
        <ImageContainer>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
            <Info>
              <Container>
                <Title>
                  <b>Title:-</b>Book Title
                </Title>
                <Author>
                  <b>Author:-</b>Author Name
                </Author>
                <Desc>
                  <b>Description:-</b>Book Description
                </Desc>
                <Price>
                  <b>Price:-</b>₹200
                </Price>
              </Container>
            </Info>
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
          <ImageContainer>
            <Image src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" />
            <Info>
              <Container>
                <Title>
                  <b>Title:-</b>Book Title
                </Title>
                <Author>
                  <b>Author:-</b>Author Name
                </Author>
                <Desc>
                  <b>Description:-</b>Book Description
                </Desc>
                <Price>
                  <b>Price:-</b>₹200
                </Price>
              </Container>
            </Info>
          </ImageContainer>
        </SwiperSlide>
        <SwiperSlide>
   
        </SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </>
  );
}
