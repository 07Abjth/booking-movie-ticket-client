import React, { useState } from 'react';
import './Carousel.css'; // This should match your CSS file path

const Carousel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="carousel">
      <div className="carousel-track">
        {images.map((image, index) => (
          <div
            className="carousel-slide"
            key={index}
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <img src={image} alt={`Slide ${index}`} />
          </div>
        ))}
      </div>
      <button className="prev" onClick={goToPrevious}>←</button>
      <button className="next" onClick={goToNext}>→</button>
    </div>
  );
};

export default Carousel;
