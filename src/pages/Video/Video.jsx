import React from "react";
import "./Video.css";
import PlayVideo from "../../components/PlayVideo/PlayVideo";

const Video = () => {
  return (
    <>
      <div className="play-container showBox">
        <PlayVideo />
      </div>
    </>
  );
};

export default Video;
