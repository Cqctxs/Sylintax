import React, { useEffect, useState } from 'react'
import useAuth from 'src/hooks/useAuth';
import generate from '../api/cohere';

function Lesson() {
  const { auth } = useAuth();
  console.log(response);
  return (
    <div className="text-text-color">
      {auth?.user} {JSON.stringify(auth.completed)}
      <br/>
      {data}
    </div>
  )
}

export default Lesson