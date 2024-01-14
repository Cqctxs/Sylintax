import React, { useEffect, useState } from 'react'
import useAuth from 'src/hooks/useAuth';
import generate from '../api/cohere';

function Lesson() {
  const { auth } = useAuth();
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const message = await generate('A');
      setResult(message);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="text-text-color">
      {auth?.user} {JSON.stringify(auth.completed)}
      <br/>
      {loading ? 'Analyzing...' : `Result: ${result}`}
      <br/>
      <button onClick={fetchData}>Fetch Data</button>
    </div>
  )
}

export default Lesson