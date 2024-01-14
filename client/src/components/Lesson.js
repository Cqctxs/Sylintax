import React, { useEffect, useState } from "react";
import useAuth from "src/hooks/useAuth";
import generate from "../api/cohere";
import axios from "../api/axios";
import { useParams } from "react-router-dom";

function Lesson() {
  const REQUEST_URL = "/api/lesson";
  const id = useParams().id;
  const { auth } = useAuth();
  const [lesson, setLesson] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(1);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${REQUEST_URL}/${id}`);
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
    <div className="text-text-color w-screen h-screen items-center flex justify-center">
      {/* match your hand with the image to get the correct letter, learning */}
      {lesson[index]?.type === 1 && <div>1</div>}
      {/* recognize and enter the correct letter from the image */}
      {lesson[index]?.type === 2 && <div>2</div>}
      {/* match hand to letter, testing only */}
      {lesson[index]?.type === 3 && <div>3</div>}
    </div>
  );
}

export default Lesson;
