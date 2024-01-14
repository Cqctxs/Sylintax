import React, { useEffect, useState } from 'react'
import useAuth from 'src/hooks/useAuth';
import generate from '../api/cohere';
import axios from "../api/axios";

function Lesson() {
  const id = "65a2e359f83e5f84733fd76e";
  const REQUEST_URL = "/api/lesson";
  const { auth } = useAuth();
  const [lesson, setLesson] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      console.log(JSON.stringify({id : id}));
      try {
        const response = await axios.get(
          REQUEST_URL,
          JSON.stringify({id : id}),
          {
            headers: { "Content-Type": "application/json" }
          }
        );
        setLesson(response?.data?.lesson);
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing id");
        } else if (err.response?.status === 404) {
          setErrMsg("Lesson with that id could not be found.");
        } else {
          setErrMsg("Getting lesson failed.");
        }
      }
    }
    fetchData();
  }, []);

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
      {JSON.stringify(lesson)}
      {errMsg}
    </div>
  )
}

export default Lesson