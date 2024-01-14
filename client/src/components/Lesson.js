import React, { useEffect, useState } from "react";
import useAuth from "src/hooks/useAuth";
import generate from "../api/cohere";
import axios from "../api/axios";

function Lesson() {
  const id = "65a34ba1f122554807584d58";
  const REQUEST_URL = "/api/lesson";
  const { auth } = useAuth();
  const [lesson, setLesson] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${REQUEST_URL}/${id}`);
        console.log(response);
        setLesson(response?.data);
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
    };

    fetchData();
  }, []);

  return (
    <div className="text-text-color">
      {/* ... */}
      {lesson && lesson.length > 0 && (
        <ul>
          {lesson.map((data) => (
            <li key={data.id}>{JSON.stringify(data)}</li>
          ))}
        </ul>
      )}
      {/* ... */}
    </div>
  );
}

export default Lesson;
