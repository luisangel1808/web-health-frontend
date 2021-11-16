import React from "react";
import ReactPlayer from "react-player";
import "../styles/components/Video.css";

const Video = (props) => {
  const { id } = props.match.params;
  const video = {
    title: "Title",
    url: "https://www.youtube.com/watch?v=JdPkgNa9gT0",
  };
  return (
    <div className="Video">
      <h2>{video.title + id}</h2>
      <div className="Video-container">
        <ReactPlayer
          url={video.url}
          width="100%"
          height="100%"
          controls
          className="Video-container-player"
        />
      </div>
    </div>
  );
};

export default Video;
