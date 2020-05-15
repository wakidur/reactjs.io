// Using ES6 modules
import React, { Component, Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// 3th party dependency
import 'bootstrap/dist/css/bootstrap.min.css';

// components import


import Header from './components/layout/Header';
const CurrencyConverter = lazy(() => import('./components/pages/react-render-props/CurrencyConverter')); 
const Todos = lazy(() => import('./components/pages/todo/Todos'));
const About = lazy(() => import('./components/pages/about/About'));
const SpecificTodo = lazy(() => import('./components/pages/axios-todos/SpecificTodo'));
const ToDoList = lazy(() => import('./components/pages/axios-todos/ToDoList'));
const FilterableProductTable = lazy(() => import('./components/pages/product/FilterableProductTable'));
const TemperatureCalculator = lazy(() => import('./components/pages/temperature-calculator/TemperatureCalculator'));

class App extends Component {
  render() {
    return ( 
      <div className="container">
        <Router>
          <Suspense fallback={<div>Loading...</div>} className="container">
            <Header /> 
            <Switch>
              <Route exact path = '/' component = {Todos}/> 
              <Route path = '/products'component = {FilterableProductTable}/> 
              <Route path = '/temperature'component = {TemperatureCalculator}/> 
              <Route exact path='/todos' component={ToDoList} />
              <Route exact path="/todos/:id" component={SpecificTodo} />
              <Route path = '/about' component = {About}/> 
              <Route path = '/render-props' component = {CurrencyConverter}/> 
            </Switch>
          </Suspense> 
        </Router>
      </div>
      
    )
  }
}
// import Header from './components/layout/Header';
// import Todos from './components/pages/todo/Todos';
// import About from './components/pages/about/About';
// import SpecificTodo from './components/pages/axios-todos/SpecificTodo';
// import ToDoList from './components/pages/axios-todos/ToDoList';
// import FilterableProductTable from './components/pages/product/FilterableProductTable';
// import TemperatureCalculator from './components/pages/temperature-calculator/TemperatureCalculator';

// class App extends Component {
//   render() {
//     return ( 
//     <Router >
//       <div className = "container" >
//         <Header />
//         <Route exact path = '/'component = {Todos}/> 
//         <Route path = '/products'component = {FilterableProductTable}/> 
//         <Route path = '/temperature'component = {TemperatureCalculator}/> 
//         <Route exact path='/todos' component={ToDoList} />
//         <Route exact path="/todos/:id" component={SpecificTodo} />
//         <Route path = '/about'component = {About}/> 
//       </div> 
//     </Router>
//     )
//   }
// }


export default App;