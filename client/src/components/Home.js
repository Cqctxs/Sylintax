import React from 'react'
import asl from '../images/asl.png'

function Home() {
  return (
    <div className='flex justify-center'>
      <img src={asl} alt='asl' className='w-[180px] h-[82.25]'/>
      <h1 className='font-ShinGoPro text text-8xl'>Silyntax</h1>
      
    </div>
  );
}

export default Home;
