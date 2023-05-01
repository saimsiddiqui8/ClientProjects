import React from 'react';
import { Carousel } from 'react-bootstrap';

const ImageSlider = ({ images }) => {
  console.log(images);
  return (
    <Carousel interval={null} touch={true}>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} alt={`Slide ${index}`} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImageSlider;