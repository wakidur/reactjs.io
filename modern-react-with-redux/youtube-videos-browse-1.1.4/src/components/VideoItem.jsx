import React from "react";
import PropTypes from "prop-types";
import { Card, Row, Col } from "react-bootstrap";

function VideoItem({ video, onVideoSelect }) {
  return (
    <Card onClick={() => onVideoSelect(video)}>
      <Row>
        <Col xs lg="4">
          <Card.Img
            className="card-img"
            alt={video.snippet.title}
            src={video.snippet.thumbnails.medium.url}
          />
        </Col>
        <Col xs lg="8">
          <Card.Body>
            <Card.Title className="text-truncate">Card Title </Card.Title>
            <Card.Text className="text-truncate">{video.snippet.title}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
}

VideoItem.propTypes = {
  video: PropTypes.object,
  onVideoSelect: PropTypes.func,
};

export default VideoItem;
