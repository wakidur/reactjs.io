import React, { Component } from "react";
import PropTypes from "prop-types";

import SpinnerComponent from "./Spinner";



export default class ImageCard extends Component {
  state = {
    spans: 0,
    isLoaded: false,
    loader: null,
  };

  static propTypes = {
    image: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener("load", this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const isLoaded = height > 0 ? true : false;
    const spans = Math.ceil(height / 10);
    this.setState({ spans, isLoaded });
  };

  render() {
    let loader = null;
    const { description, urls } = this.props.image;
    
    if (this.state.isLoaded) {
      loader = null;
    } else {
      loader = <SpinnerComponent message="Image is loading" />;
    }
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img ref={this.imageRef} src={urls.regular} alt={description} />
        {loader}
      </div>
    );
  }
}
