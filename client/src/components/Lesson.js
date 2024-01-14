import React, { useEffect, useState, useRef, useCallback } from "react";
import useAuth from "src/hooks/useAuth";
import generate from "../api/cohere";
import axios from "../api/axios";
import Webcam from "react-webcam";
import { useParams } from "react-router-dom";
import { Sparkles } from "lucide-react";


function Lesson() {
  const REQUEST_URL = "/api/lesson";
  const id = useParams().id;
  const { auth } = useAuth();
  const [lesson, setLesson] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState({});

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);

  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setImgSrc(imageSrc);
  }, [webcamRef]);

  const retake = () => {
    setImgSrc(null);
  };

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
      {lesson[index]?.type === 1 && (
        <div className="w-3/4 h-3/4 bg-background-color border-2 border-primary-color rounded-lg shadow-sm">
          <h3 className="text-xl font-ShinGoPro">
            <Sparkles className="w-5 h-5 inline-block mr-2 -translate-y-[2px]" />
            New Letter!
          </h3>
          <h1 className="text-4xl font-ShinGoPro ">
            This is the letter "{lesson[index]?.letter}"
          </h1>
          <div className="w-full h-full flex justify-center items-center">
            {/* photocam */}
            <img
              src={require(`../images/${lesson[index]?.letter}.png`)}
              alt={"letter " + lesson[index]?.letter}
            />
          </div>
          {imgSrc ? (
            <img src={imgSrc} alt="webcam" />
          ) : (
            <Webcam height={600} width={600} ref={webcamRef} />
          )}
          <div>
            {imgSrc ? (
              <button onClick={retake}>Retake photo</button>
            ) : (
              <button onClick={capture}>Capture photo</button>
            )}
          </div>
        </div>
      )}
      {/* recognize and enter the correct letter from the image */}
      {lesson[index]?.type === 2 && (
        <div className="w-3/4 h-3/4 bg-background-color border-2 border-primary-color rounded-lg shadow-sm"></div>
      )}
      {/* match hand to letter, testing only */}
      {lesson[index]?.type === 3 && (
        <div className="w-3/4 h-3/4 bg-background-color border-2 border-primary-color rounded-lg shadow-sm"></div>
      )}
    </div>
  );
}

export default Lesson;
