import React from "react";
import PropTypes from "prop-types";
import VideoItem from "./VideoItem";

function VideoList({ videos, onVideoSelect }) {
  const renderedList = videos.map((video) => {
    return (
      <VideoItem
        key={video.id.videoId}
        onVideoSelect={onVideoSelect}
        video={video}
      />
    );
  });
  return <div>{renderedList}</div>;
}

VideoList.propTypes = {
  videos: PropTypes.array,
};

export default VideoList;
