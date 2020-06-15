import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PropTypes from "prop-types";
import { Container, Row, Col } from "react-bootstrap";

import unsplash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from "./ImageList";

export class App extends Component {
  state = {
    images: [],
  };
  
  static propTypes = {};

  onSearchSubmit = async (term) => {
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    this.setState({images: response.data.results});
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {/* onSubmitSearchValue props type func*/}
            <SearchBar onSubmitSearchValue={this.onSearchSubmit} />
            {/* images props type array*/}
            <ImageList images={this.state.images} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
