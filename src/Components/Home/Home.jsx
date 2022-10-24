import React from 'react';
import Carousel from '../Carousel/Carousel';




import '../css/home.css'

const Home = () => {

  return (

    <div className='hero-content flex-col w-full  lg:flex-row-reverse '>

      <div className=' text-center mt-14 w-full'>
        <h1 className='text-5xl font-bold mt-5 text-center text-black '>COX'S BAZAR</h1>
        <br />
        <p className='px-20 text-black'>Cox's bazae is a city. Fishing port tourism center and district headquarters in mostly for its long natural sandy beach</p>

      </div>

      <div>
        <Carousel></Carousel>
      </div>
      
    </div>
  );
};

export default Home;