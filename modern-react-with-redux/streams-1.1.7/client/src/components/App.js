// Using ES6 modules
import React, { Component, Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Container } from "react-bootstrap";

import history from "../utility/history";
import Header from "./layout/Header";

import StreamCreate from "./streams/StreamCreate";
import StreamEdit from "./streams/StreamEdit";
import StreamDelete from "./streams/StreamDelete";
import StreamList from "./streams/StreamList";
import StreamShow from "./streams/StreamShow";

function App() {
  return (
    <Container>
      <Router history={history}>
        <React.Fragment>
          <Header />
          {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </React.Fragment>
      </Router>
    </Container>
  );
}

export default App;
