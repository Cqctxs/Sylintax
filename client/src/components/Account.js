import React, { useEffect, useState } from 'react'
import useAuth from 'src/hooks/useAuth';
import axios from '../api/axios';

function Account() {
  const REQUEST_URL = "/api/user";
  const { auth } = useAuth();
  const [profile, setProfile] = useState({});
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${REQUEST_URL}/${auth?.user}`);
        console.log(response);
        setProfile(response?.data);
      } catch (err) {
        if (!err?.response) {
          setErrMsg("No Server Response");
        } else if (err.response?.status === 400) {
          setErrMsg("Missing username");
        } else if (err.response?.status === 404) {
          setErrMsg("User could not be found.");
        } else {
          setErrMsg("Getting user failed.");
        }
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      
      {profile?.user}
      <br />
      {profile?.completed}
    </div>
  )
}

export default Account