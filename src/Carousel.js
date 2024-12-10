import React from 'react';
import Slider from 'react-slick';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLz6hmJwVYuCe-jiq4gwrDjavmfA7ga-25hw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSed_eb8NNs4PdL3kGX4kvOCLCOT0Xpr-pLjQ&s',
  'https://m.media-amazon.com/images/G/31/img24/Glap/gw/pea/v1/Amazon_Diwali2024_Gaming1_1400x800._SX1242_QL85_.jpg',
];

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000, 
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`Slide ${index + 1}`} style={{width:'100%', height:'300px',alignItems: 'center',justifyContent: 'center', objectFit: 'cover'}}  class='carousal-image' />
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default Carousel;
