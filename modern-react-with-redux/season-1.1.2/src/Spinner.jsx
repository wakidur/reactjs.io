import React from "react";
import { Spinner } from 'react-bootstrap';

const SpinnerComponent = (props) => {
  return (
    <Spinner animation="border" role="status">
      <span className="sr-only"> {props.message}</span>
    </Spinner>
  );
};

SpinnerComponent.defaultProps = {
  message: "Loading...",
};

export default SpinnerComponent;
