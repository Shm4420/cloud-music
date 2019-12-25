import styled from 'styled-components'
import style from '../../assets/css/common';

export const SliderContainer = styled.div`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 160px;
  margin: auto;
  /* background: white; */
  &::before {
	content:'';
    position: absolute;
    top: 0;
    height: 80%;
    width: 100%;
    background: ${style["theme-color"]};
  }
  .slider-container {
	background: white;
    position: relative;
    width: 98%;
    height: 100%;
    overflow: hidden;
    margin: auto;
    border-radius: 6px;
    .slider-nav {
      position: absolute;
      display: block;
      width: 100%;
      height: 100%;
    }
    .swiper-pagination-bullet-active {
      background: ${style["theme-color"]};
    }
  }
`