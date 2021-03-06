import React from 'react'
import Slider from 'react-slick'
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImgSlider() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        //autoplay:true
      };
    return (
        <Carousel{...settings}>
            <Wrap>
                <img src="/images/slider-badging.jpg" />
            </Wrap>
            <Wrap>
            <img src="/images/slider-badag.jpg" />
            </Wrap>
            <Wrap>
            <h4>Hello Martha</h4>
            <img src="/images/slider-scales.jpg" />
            </Wrap>
        </Carousel>
    )
}

export default ImgSlider;

const Carousel = styled(Slider)`
    
    margin-top:20px;
    .slick-list{
        overflow:visible;
    }
    button{
        z-index:1;
    }
`
const Wrap = styled.div`
    cursor:pointer;
    position:relative;

    h4{
        position:absolute;
        display:flex;
        ;
      
    }
    img{
        border: 4px solid transparent;
        width:100%;
        height:100%;
        border-radius:4px;
        box-shadow: rgb(0 0 0 / 69%) 0px 26px 38px -10px,
        rgba(0 0 0 / 73%) 0px 16px 10px -10px;
        transition-duration:300ms;

        &:hover{
            border: 4px solid rgba(249,249,249,0.8);
        }
    }
`

