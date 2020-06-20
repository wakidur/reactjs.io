import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Row, Col, ListGroup } from "react-bootstrap";

import { fetchStreams } from "../../actions";

class StreamList extends Component {
  //   static propTypes = {
  //     fetchStreams: PropTypes.func,
  //   };

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderList() {
    return this.props.streams.map((stream) => {
    return <ListGroup.Item key={stream.id}>{stream.title}</ListGroup.Item>;
    });
  }

  render() {
    return (
      <Row>
        <Col xs lg={6}>
          <ListGroup>{this.renderList()}</ListGroup>
        </Col>
      </Row>
    );
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
});

const mapDispatchToProps = {
  fetchStreams,
};

export default connect(mapStateToProps, mapDispatchToProps)(StreamList);
