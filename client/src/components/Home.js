import React from 'react'
import asl from '../images/asl.png'

function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='absolute bottom-5 left-0 flex justify-center'>
        <img src={asl} alt='asl' className='w-[180px] h-[82.25]' />
        <h1 className='font-ShinGoPro text-primary-color text-8xl'>Silyntax</h1>
        <p className='font-Poppins text-primary-color text-2xl'>is an online platform that provides a comprehensive and interactive learning experience for American Sign Language (ASL) learners, catering to different types of learners, including college students, language enthusiasts, interpreters, homeschoolers, parents of deaf children, and professionals 1.</p>

      </div>
    </div>
  );
}

export default Home;
