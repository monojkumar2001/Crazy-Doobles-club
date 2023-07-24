import React from 'react'
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const LeftImages = () => {


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6, // Adjust this value to change the number of visible images at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, // Set the delay between auto slides
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };
  return (
    <div className="image-stripbar left-sideImage">
    <Slider {...settings}>
      {/* Replace the image URLs with your actual image URLs */}
      <div className="image-strip-item">
      <img
                src="/images/left-img-1.svg"
               className="carousel-img image-scale-1 "
               alt=""
             />
      </div>
      <div className="image-strip-item">
      <img
                src="/images/left-img-1.svg"
               className="carousel-img image-scale-1 "
               alt=""
             />
      </div>
      <div className="image-strip-item">
        
        <img src="/images/left-img-1.svg" className="carousel-img image-scale-1 " alt="" />
      </div>
      {/* Add more images as needed */}
    </Slider>
    </div>
  );



  
  // return (
  //   <>
  //      <div className="image-stripbar left-sideImage">
  //             <img
  //               src="/images/left-img-1.svg"
  //               className="carousel-img image-scale-1 "
  //               alt=""
  //             />
  //             <img
  //               src="/images/left-img-2.svg"
  //               className="carousel-img image-scale-2"
  //               alt=""
  //             />
  //             <img
  //               src="/images/left-img-3.svg"
  //               className="carousel-img image-scale-3"
  //               alt=""
  //             />
  //             <img
  //               src="/images/left-img-4.svg"
  //               className="carousel-img image-scale-4"
  //               alt=""
  //             />
  //             <img
  //               src="/images/left-img-5.svg"
  //               className="carousel-img image-scale-5"
  //               alt=""
  //             />
  //             <img
  //               src="/images/left-img-6.svg"
  //               className="carousel-img image-scale-6"
  //               alt=""
  //             />
  //           </div>
  //   </>
  // )
}

export default LeftImages