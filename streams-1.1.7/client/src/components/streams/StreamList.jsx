import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col, ListGroup } from "react-bootstrap";

import { fetchStreams } from "../../actions";

class StreamList extends Component {
  static propTypes = {
    fetchStreams: PropTypes.func,
  };

  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin(stream) {
    return (
      <div className="">
        <Link to={`/streams/edit/${stream.id}`} className="">
          Edit
        </Link>
        <Link to={`/streams/delete/${stream.id}`} className="">
          Delete
        </Link>
      </div>
    );
  }

  renderList() {
    return this.props.streams.map((stream) => {
      return (
        <ListGroup.Item key={stream.id}>
          {stream.description}
          {this.renderAdmin(stream)}
        </ListGroup.Item>
      );
    });
  }

  renderCreate() {
    return (
      <div>
        <Link to="/streams/new">
        Create Stream 
        </Link>
      </div>
    )
  }

  render() {
    return (
      <Row>
        <Col xs lg={6}>
          <ListGroup>{this.renderList()}</ListGroup>
          {this.renderCreate()}
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
