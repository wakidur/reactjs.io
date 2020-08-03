import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Page import
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";

import { auth } from "./firebase/firebase.utils";

import "./scss/App.scss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(
      async userAuth => {
        if (userAuth) {
          console.log(userAuth)
        }
        this.setState({ currentUser: userAuth });

      }
    )
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Header currentUser={this.state.currentUser} />
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/shop" component={Shop} />
            <Route exact path="/signin" component={SignInAndSignUp} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
