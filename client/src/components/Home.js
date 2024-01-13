import React from 'react'
import asl from '../images/asl.png'

function Home() {
  return (
    <div className='flex justify-center'>
      <img src={asl} alt='asl' className='scale-50'/>
      <h1 className='font-ShinGoPro text-white text-xl'>Silyntax</h1>
      
    </div>
  );
}

export default Home;
