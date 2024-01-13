import React from 'react'
import useAuth from 'src/hooks/useAuth';

function Lesson() {
  const { auth } = useAuth();
  return (
    <div className="text-text-color">
      {auth?.user} {JSON.stringify(auth.completed)}
    </div>
  )
}

export default Lesson