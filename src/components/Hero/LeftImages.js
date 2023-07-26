import React from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const LeftImages = () => {
  return (
    <>
       <div className="image-stripbar left-sideImage">
              <img
                src="/images/left-img-1.svg"
                className="carousel-img image-scale-1 "
                alt=""
              />
              <img
                src="/images/left-img-2.svg"
                className="carousel-img image-scale-2"
                alt=""
              />
              <img
                src="/images/left-img-3.svg"
                className="carousel-img image-scale-3"
                alt=""
              />
              <img
                src="/images/left-img-4.svg"
                className="carousel-img image-scale-4"
                alt=""
              />
              <img
                src="/images/left-img-5.svg"
                className="carousel-img image-scale-5"
                alt=""
              />
              <img
                src="/images/left-img-6.svg"
                className="carousel-img image-scale-6"
                alt=""
              />
            </div>
    </>
  )
}

export default LeftImages