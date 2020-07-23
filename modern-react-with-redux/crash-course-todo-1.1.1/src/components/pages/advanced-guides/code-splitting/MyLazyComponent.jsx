import React, { Component, Suspense } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'


import ErrorBoundary from './ErrorBoundary';

const OtherComponent = React.lazy(() => import('./OtherComponent'));
const AnotherComponent = React.lazy(() => import('./AnotherComponent'));

export default class MyLazyComponent extends Component {
  render() {
    return (
      <div>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading ....</div>}>
            <OtherComponent />
            <AnotherComponent />
          </Suspense>
        </ErrorBoundary>
      </div>
    );
  }
}
