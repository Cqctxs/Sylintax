import React from 'react'
import Rain from './ui/rain';


function Home() {

  return (
    <div className='h-screen w-screen flex flex-col justify-center items-center'>
      <Rain/>
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