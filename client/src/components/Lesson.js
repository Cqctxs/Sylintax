import React from 'react'
import useAuth from 'src/hooks/useAuth';

function Lesson() {
  const { auth } = useAuth();
  return (
    <div className="text-text-color">
      {auth?.user} {auth.completed}
    </div>
  )
}

export default Lesson