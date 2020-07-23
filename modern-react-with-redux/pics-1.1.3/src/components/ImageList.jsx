import React from "react";
import PropTypes from "prop-types";

import ImageCard from "./ImageCard";
import "./ImageList.scss";

function ImageList(props) {
  return (
    <div className="image-list">
      {props.images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
}

ImageList.propTypes = {
  images: PropTypes.array,
};

export default ImageList;
