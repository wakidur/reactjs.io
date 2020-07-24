import React from "react";
import PropTypes from "prop-types";
import { Card } from "react-bootstrap";

import SpinnerComponent from "./Spinner";

function VideoDetail({ video }) {
  if (!video) {
    return <SpinnerComponent message="Image is loading" />;
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <Card>
      <Card.Body>
        <iframe title="video player" src={videoSrc} />
        <Card.Title>{video.snippet.title}</Card.Title>
        <Card.Text> {video.snippet.description} </Card.Text>
      </Card.Body>
    </Card>
  );
}

VideoDetail.propTypes = {
  video: PropTypes.string,
};

export default VideoDetail;
