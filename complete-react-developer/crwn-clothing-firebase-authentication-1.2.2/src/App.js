import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

// Page import
import Header from "./components/header/Header";
import HomePage from "./pages/homepage/HomePage";
import Shop from "./pages/shop/Shop";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/SignInAndSignUp";


function App() {
  return (
    <Router>
      <React.Fragment>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/signin" component={SignInAndSignUp} />
        </Switch>
      </React.Fragment>
    </Router>
  );
}

export default App;
