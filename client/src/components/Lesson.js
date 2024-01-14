import React, { useEffect, useState, useRef, useCallback } from "react";
import useAuth from "src/hooks/useAuth";
import generate from "../api/cohere";
import axios from "../api/axios";
import Webcam from "react-webcam";
import { useParams } from "react-router-dom";
import { Sparkles, Flame, Trophy, MoveLeft, MoveRight } from "lucide-react";
import { Button } from "./ui/button";

function Lesson() {
  const REQUEST_URL = "/api/lesson";
  const [end, setEnd] = useState(false);
  const id = useParams().id;
  const { auth, setAuth } = useAuth();
  const [lesson, setLesson] = useState([]);
  const [errMsg, setErrMsg] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  const [index, setIndex] = useState(0);
  const [current, setCurrent] = useState({});
  const [letter, setLetter] = useState("");
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);

  const webcamRef = useRef(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [latest, setLatest] = useState(0);

  const generateResponse = async (letter) => {
    const response = await generate(letter);
    return response;
  };

  const capture = useCallback(async () => {
    const imageSrc = webcamRef.current.getScreenshot();

    setImgSrc(imageSrc);

    let img_flask = imageSrc.substring(23);

    const formData = new FormData();

    formData.append('file', img_flask);

    try {
      // Make a POST request to the Flask server
      const response = await axios.post("http://localhost:5000/verify", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      console.log(lesson[index]?.letter);
      console.log(response.data);
      console.log(lesson[index].letter == response.data);
      setCorrect(lesson[index].letter == response.data);
      setIncorrect(lesson[index].letter != response.data);
    } catch (error) {
      console.error("Error uploading file", error)
    }

  }, [webcamRef, index]);

  const retake = () => {
    setImgSrc(null);
  };

  const incrementIndex = () => {
    setIndex((prevIndex) => prevIndex + 1);
    if (index >= latest - 1) setCorrect(false);
    else setCorrect(true);
    retake();
    setLatest((prevLatest) => Math.max(prevLatest, index))
  };

  const decrementIndex = () => {
    setIndex((prevIndex) => prevIndex - 1);
    setCorrect(true);
    retake();
    setLatest((prevLatest) => Math.max(prevLatest, index))
  };

  const endLesson = async () => {
    setEnd(true);
    await updateUser();
  }

  useEffect(() => {
    console.log(index);
  }, [index]);

  useEffect(() => {
    console.log(correct);
  }, [correct]);

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

  const updateUser = async () => {
    console.log(JSON.stringify({ completed: [...auth?.completed, id] }));
    try {
      const response = await axios.put(`api/user/${auth?.user}`,
        JSON.stringify({ completed: [...auth?.completed, id] }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true
        });
      console.log(JSON.stringify(response.data));
      const newCompleted = response.completed;
      setAuth({
        ...auth,
        completed: newCompleted
      });
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="text-text-color w-screen h-screen items-center flex flex-col justify-center">
      {/* match your hand with the image to get the correct letter, learning */}
      {lesson[index]?.type === 1 && !end && (
        <div className="w-3/4 h-3/4 mt-24">
          <div className="ml-10 mt-10">
            <h3 className="text-xl font-ShinGoPro">
              <Sparkles className="w-5 h-5 inline-block mr-2 -translate-y-[2px]" />
              New Letter!
            </h3>
            <h1 className="text-4xl font-ShinGoPro ">
              This is the letter "{lesson[index]?.letter}"
            </h1>
          </div>
          <div className="w-full h-full relative flex flex-row-reverse justify-center items-center -translate-y-20">
            {imgSrc ? (
              <img
                className="absolute border-2 border-text-color rounded-lg shadow-sm"
                src={imgSrc}
                alt="webcam"
                width={600}
                height={600}
              />
            ) : (
              <Webcam
                className="absolute border-2 border-text-color rounded-lg shadow-sm"
                height={600}
                width={600}
                ref={webcamRef}
                mirrored={true}
                screenshotFormat="image/jpeg"
              />
            )}
            {imgSrc ? (
              <div></div>
            ) : (
              <img
                className="absolute"
                src={require(`../images/${lesson[index]?.letter}.png`)}
                alt={"letter " + lesson[index]?.letter}
                style={{ transform: "scaleX(-1)" }}
              />
            )}
            <div>
              {imgSrc ? (
                <button className="mt-[31rem]" onClick={retake}>
                  Retake photo
                </button>
              ) : (
                <button className="mt-[31rem]" onClick={capture}>
                  Capture photo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {/* recognize and enter the correct letter from the image */}
      {lesson[index]?.type === 2 && !end && (
        <div className="w-3/4 h-3/4 mt-24">
          <div className="ml-10 mt-10">
            <h1 className="text-4xl font-ShinGoPro ">
              Type in the correct meaning
            </h1>
          </div>
          <div className="w-full h-full flex flex-col justify-center items-center">
            <img
              src={require(`../images/${lesson[index]?.letter}.png`)}
              alt={"letter " + lesson[index]?.letter}
              style={{ transform: "scaleX(-1)" }}
            />
            <div className="w-1/6 relative inline-flex items-center justify-center">
              <input
                className="h-14 pl-4 mt-10 resize-none border-2 border-text-color rounded-lg shadow-sm font-ShinGoPro bg-background-color"
                placeholder="Type in a letter:"
                maxLength={1}
                value={letter}
                onChange={(e) => {
                  setLetter(e.target.value.toUpperCase());
                }}
              />
              <Button className="absolute hover:bg-secondary-color top-12 bg-primary-color text-white rounded-lg shadow-sm font-ShinGoPro bottom-2 right-1" onClick={() => {
                if (letter === lesson[index]?.letter) {
                  setCorrect(true);
                } else {
                  setIncorrect(true);
                }
                setLetter("");
              }}>
                <MoveRight />
              </Button>
            </div>
          </div>
        </div>
      )}
      {/* match hand to letter, testing only */}
      {lesson[index]?.type === 3 && !end && (
        <div className="w-3/4 h-3/4 mt-24">
          <div className="ml-10 mt-10">
            <h3 className="text-xl font-ShinGoPro">
              <Flame className="w-5 h-5 inline-block mr-2 -translate-y-[2px]" />
              Challenge!
            </h3>
            <h1 className="text-4xl font-ShinGoPro ">
              Sign the letter "{lesson[index]?.letter}"
            </h1>
          </div>
          <div className="w-full h-full relative flex flex-row-reverse justify-center items-center -translate-y-20">
            {imgSrc ? (
              <img
                className="absolute border-2 border-text-color rounded-lg shadow-sm"
                src={imgSrc}
                alt="webcam"
                width={600}
                height={600}
              />
            ) : (
              <Webcam
                className="absolute border-2 border-text-color rounded-lg shadow-sm"
                height={600}
                width={600}
                ref={webcamRef}
                mirrored={true}
              />
            )}
            <div>
              {imgSrc ? (
                <button className="mt-[31rem]" onClick={retake}>
                  Retake photo
                </button>
              ) : (
                <button className="mt-[31rem]" onClick={capture}>
                  Capture photo
                </button>
              )}
            </div>
          </div>
        </div>
      )}
      {end === true && (
        <div className="w-3/4 h-3/4 mt-24">
          <div className="ml-10 mt-10">
            <h3 className="text-xl font-ShinGoPro">
              <Flame className="w-5 h-5 inline-block mr-2 -translate-y-[2px]" />
              Great work,
            </h3>
            <h1 className="text-4xl font-ShinGoPro ">
              You unlocked a new lesson!
            </h1>
          </div>
        </div>
      )}

      <div className="flex justify-center w-1/6 z-30 -translate-y-5">
        {index > 0 && !end && (
          <Button
            className="bg-transparent transition -translate-y-1 duration-500 hover:bg-transparent hover:-translate-y-2"
            onClick={decrementIndex}
          >
            <MoveLeft className="text-primary-color text-left" />
          </Button>
        )}
        <h3 className="text-xl font-ShinGoPro text-center">
          {index + 1}/{lesson.length}
        </h3>
        {index < lesson.length - 1 && correct && !end && (
          <Button
            className="bg-transparent transition -translate-y-1 duration-500 hover:bg-transparent hover:-translate-y-2"
            onClick={incrementIndex}
          >
            <MoveRight className="text-primary-color text-right" />
          </Button>
        )}
        {index === lesson.length - 1 && correct && (
          <Button
            className="bg-transparent transition -translate-y-1 duration-500 hover:bg-transparent hover:-translate-y-2"
            onClick={endLesson}
          >
            <MoveRight className="text-primary-color text-right" />
          </Button>
        )}
      </div>
    </div>
  );
}

export default Lesson;
