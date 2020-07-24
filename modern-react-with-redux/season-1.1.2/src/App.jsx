import React, { Component } from "react";
import SeasonDisplay from "./SeasonDisplay";
import SpinnerComponent from "./Spinner";
import './SeasonDisplay.scss'

export default class App extends Component {
  state = { 
    lat: null, 
    errorMessage: "" }
    ;

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat)
      return <div> Error: {this.state.errorMessage}</div>;

    if (!this.state.errorMessage && this.state.lat)
      return <SeasonDisplay lat={this.state.lat} />;

    return <SpinnerComponent message="Please accept location request" />;
  }
  render() {
    return <div className="border red">{this.renderContent()}</div>;
  }
}
