import React, { Component } from "react";
import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import "./SignIn.scss"

export default class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({
      email: "",
      password: "",
    });
  };

  // Handle Change 

  handleChange = (event) => {
    
      const { value, name } = event.target;

      this.setState({
          [name]: value,
      })
  }
  

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span> Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            handleChange={this.handleChange}
            value={this.state.email}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            handleChange={this.handleChange}
            value={this.state.password}
            label="password"
            required
          />

          <CustomButton type="submit">Sign in</CustomButton>
        </form>
      </div>
    );
  }
}
