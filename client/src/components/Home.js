import React from 'react'
import asl from '../images/asl.png'

function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      <div className='absolute bottom-0 left-0 flex justify-start flex-wrap w-[50%] m-10'>
        <p className='font-Poppins text-primary-color text-2xl'>
          <div className='inline-flex mr-5'>
            <img src={asl} alt='asl' className='w-[180px] h-[82.25]' />
            <h1 className='font-ShinGoPro text-primary-color text-8xl'>Silyntax</h1>
          </div>
          is an online platform that provides a comprehensive and interactive learning experience for American Sign Language (ASL) learners, catering to different types of learners, including college students, language enthusiasts, interpreters, homeschoolers, parents of deaf children, and professionals.
        </p>
      </div>
    </div>
  );
}

export default Home;