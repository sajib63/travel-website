import React from 'react';
import Carousel from '../Carousel/Carousel';

import image from './img/124538-world-tour-start.gif'


import '../css/home.css'

const Home = () => {

  return (

    <div className='grid grid-cols-2'>

      <div className=' text-center mt-14 w-full'>
      <img className='ml-32' src={image} alt="" />

      </div>

      <div className='mt-48'>
        <Carousel></Carousel>
      </div>
      
    </div>
  );
};

export default Home;