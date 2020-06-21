import React, { Component } from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";

import { createStream } from "../../actions";
import StreamForm from "./StreamForm";

export class StreamCreate extends Component {
  // static propTypes = {
  //     createStream: PropTypes.func
  // }

  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <div>
        <h3>Create a Stream</h3>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}



const mapDispatchToProps = {
  createStream,
};

export default connect(null, mapDispatchToProps)(StreamCreate);
