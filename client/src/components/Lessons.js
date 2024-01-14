import React from 'react'
import LessonCard from './ui/lessoncard'
import useAuth from 'src/hooks/useAuth'

function Lessons() {
  const { auth } = useAuth();
  const completed = auth?.completed;
  const getStatus = (id, prev) => {
    if (completed.includes(id)) {
      return "completed";
    }
    if (completed.includes(prev) || id === "65a34ba1f122554807584d58") {
      return "unlocked"
    }
    return "locked";
  }
  return (
    <div className='w-full h-screen flex justify-center'>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a34ba1f122554807584d58"} status={getStatus("65a34ba1f122554807584d58", "")}/>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a3b675030b7ab1c40a8736"} status={getStatus("65a3b675030b7ab1c40a8736", "65a34ba1f122554807584d58")}/>
        <LessonCard title={"ABC Lesson"} description={"this is a test for the lesson, this is such a cool lesson where you learn so much"} id={"65a3b696030b7ab1c40a8738"} status={getStatus("65a3b696030b7ab1c40a8738", "65a3b675030b7ab1c40a8736")}/>
    </div>
    
  )
}

export default Lessons