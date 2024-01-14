import React from 'react'
import asl from '../images/asl.png'
import background from '../images/background.png'
import { CircleUserRound } from 'lucide-react';

function Home() {
  return (
    <div className='h-screen flex flex-col justify-center items-center'>
      {/*<image src={background} alt='background' className='absolute top-0 left-0 w-full h-screen object-cover' />*/}
      <div className='absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-primary-color to-secondary-color opacity-50'></div>
      <nav className='absolute top-0 left-0 flex justify-between items-center w-full h-20 px-10 mt-5 pb-5 border-b-2 border-primary-color'>
        <a href='/'><img src={asl} alt='asl' className='w-[175px] h-[80]' /></a>
        <div className='flex justify-between items-center w-1/6'>
          <a href='/lessons' className='font-ShinGoPro text-primary-color text-2xl mr-5 '>Lessons</a>
          <a href='/login' className='font-ShinGoPro text-primary-color text-2xl mr-5'><CircleUserRound className='w-6 h-6' /></a>
        </div>
      </nav>
      <div className='absolute bottom-0 left-0 flex justify-start flex-wrap w-1/2 p-10'>
        <p className='font-Poppins text-primary-color text-2xl'>
          <div className='inline-flex mr-5'>
            <h1 className='font-ShinGoPro text-primary-color text-8xl'>Silyntax</h1>
          </div>
          is an online platform that provides a comprehensive and interactive learning experience for American Sign Language (ASL) learners, catering to different types of learners, including college students, language enthusiasts, interpreters, homeschoolers, parents of deaf children, and professionals.
        </p>
      </div>
    </div>
  );
}

export default Home;