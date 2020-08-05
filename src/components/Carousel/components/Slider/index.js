/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;
  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 0;
    width: 35px;
    background-color: #00000040;
    height: 100%;
  }
  .slick-next {
    right: 0;
    background-color: #00000040;
    width: 35px;
    height: 100%;
  }
`;

export const SliderItem = styled.li`
  margin-right: 4px;
  img {
    margin: 16px;
    object-fit: cover;
  }
  a:hover {
    transition:500ms;
    transform:scale(1.2);
    margin:0 30px 0 30px;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,
      speed: 300,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToShow: 5,
      slidesToScroll: 3,
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider;