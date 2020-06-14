import React, { Component } from "react";
import PropTypes from "prop-types";

export default class ImageCard extends Component {
  state = {
    spans: 0,
    isLoaded: false,
  };

  static propTypes = {
    image: PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10);
    this.setState({ spans });
  };

  render() {
    const { description, urls } = this.props.image;
    return (
      <div 
      style={{ gridRowEnd: `span ${this.state.spans}` }}>
        <img 
        ref={this.imageRef} 
        src={urls.regular} 
        alt={description} />
      </div>
    );
  }
}
