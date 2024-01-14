import React from 'react'
import LessonCard from './ui/lessoncard'
import useAuth from 'src/hooks/useAuth'

function Lessons() {
  const { auth } = useAuth();
  const completed = auth?.completed;
  return (
    <div className='w-screen h-screen flex items-center flex-col justify-center'>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a34ba1f122554807584d58"} status={"completed"}/>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a34ba1f122554807584d58"} status={"unlocked"}/>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a34ba1f122554807584d58"} status={"locked"}/>
    </div>
    
  )
}

export default Lessons