import React, { useEffect, useState } from "react";
import { YOUTUBE_API_KEY } from "./Utils/Constatnts";
import VideoCard from './VideoCard'
import { Link } from "react-router-dom";

export const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    const data = await fetch(YOUTUBE_API_KEY);
    const json = await data.json();
    setVideos(json.items);
  };

  return (
    <div className="flex flex-wrap">
      
      {videos.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <VideoCard item={video}/>
        </Link>
      ))}
    </div>
  );
};

