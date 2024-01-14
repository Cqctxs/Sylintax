import React from 'react'
import LessonCard from './ui/lessoncard'
import useAuth from 'src/hooks/useAuth'

function Lessons() {
  const { auth } = useAuth();
  const completed = auth?.completed;
  const getStatus = (id) => {
    if (completed.includes(id)) {
      return ("completed");
    }
    return ("unlocked");
  }
  return (
    <div className='w-screen h-screen flex items-center flex-col justify-center'>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a34ba1f122554807584d58"} status={getStatus("65a34ba1f122554807584d58")}/>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a3b675030b7ab1c40a8736"} status={getStatus("65a3b675030b7ab1c40a8736")}/>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a3b696030b7ab1c40a8738"} status={getStatus("65a3b696030b7ab1c40a8738")}/>
    </div>
    
  )
}

export default Lessons