import React from "react";
import PropTypes from "prop-types";
import ImageCard from "./ImageCard";
import "./ImageList.scss";

const ImageList = (props) => {
  const images = props.images.map((image) => {
    return <ImageCard key={image.id} image={image} />;
  });

  return (
    <div className="image-list">
      {props.images.map(image => <ImageCard key={image.id} image={image} />)}
    </div>
  );
};

export default ImageList;
