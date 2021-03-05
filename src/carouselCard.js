import React from 'react';
import './carouselCards.css';

import Carousel from '../components/carousel';

function carouselCards() {
  return (
    <div className='cards'>
      <h1>Create a New Card!</h1>
      <br></br>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <div class='carousel'>
            <Carousel
            />
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default carouselCards;