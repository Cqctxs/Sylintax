import React, { useEffect, useState } from 'react'
import useAuth from 'src/hooks/useAuth';
import generate from '../api/cohere';

function Lesson() {
  const { auth } = useAuth();
  return (
    <div className="text-text-color">
      {auth?.user} {JSON.stringify(auth.completed)}
      <br/>
    </div>
  )
}

export default Lesson