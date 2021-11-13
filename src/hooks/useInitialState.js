import { useState, useEffect } from "react";
import axios from "axios";

const useInitialState = (API) => {
  const [videos, setVideos] = useState([]);
  useEffect(() => {
    axios.get(API).then((response) => {
      setVideos(response.data);
    });
  }, []);
  return videos;
};

export default useInitialState;
