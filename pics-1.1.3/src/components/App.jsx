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
    console.log(term);
    const response = await unsplash.get("/search/photos", {
      params: { query: term },
    });

    console.log(response);

    this.setState({images: response.data.results});
    console.log(this.state.images);
  };

  render() {
    return (
      <Container>
        <Row>
          <Col>
            {/* onSubmit props */}
            <SearchBar onSubmitSearchValue={this.onSearchSubmit} />
            <ImageList images={this.state.images} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
