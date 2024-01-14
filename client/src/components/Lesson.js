import React, { useEffect, useState } from 'react'
import useAuth from 'src/hooks/useAuth';
import useCohere from '../hooks/useCohere';

function Lesson() {
  const { auth } = useAuth();
  const response = useCohere("A");
  const [data, setData] = useState("");
  // useEffect(() => {
  //   setData(response);
  // }, [])
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