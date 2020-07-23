import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import youtubeApi from "../apis/youtube";
import "./App.scss";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";
import SearchBar from "./SearchBar";

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit("buildings");
  }

  onTermSubmit = async (term) => {
    console.log(term);
    const response = await youtubeApi.get("/search", {
      params: {
        part: "snippet",
        maxResults: 10,
        key: "AIzaSyD33EdRWEqbao6NUejF7D8rhrYVbvsgYyE",
        q: term,
      },
    });
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };


  render() {
    return (
      <Container>
        <Row>
          <SearchBar onFormSubmit={this.onTermSubmit}/>
        </Row>
        <Row>
          <Col xs={7}>
            <VideoDetail video={this.state.selectedVideo}/>
          </Col>
          <Col xs={5}>
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videos={this.state.videos}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default App;
