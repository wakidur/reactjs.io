// Using ES6 modules
import React, {
  Component
} from 'react';
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

// 3th party dependency
import 'bootstrap/dist/css/bootstrap.min.css';

// components import
import Header from './components/layout/Header';
import Todos from './components/pages/todo/Todos';
import About from './components/pages/about/About';
import SpecificTodo from './components/pages/axios-todos/SpecificTodo';
import ToDoList from './components/pages/axios-todos/ToDoList';
import FilterableProductTable from './components/pages/product/FilterableProductTable';
import TemperatureCalculator from './components/pages/temperature-calculator/TemperatureCalculator';

class App extends Component {
  render() {
    return ( 
    <Router >
      <div className = "container" >
        <Header />
        <Route exact path = '/'component = {Todos}/> 
        <Route path = '/products'component = {FilterableProductTable}/> 
        <Route path = '/temperature'component = {TemperatureCalculator}/> 
        <Route exact path='/todos' component={ToDoList} />
        <Route exact path="/todos/:id" component={SpecificTodo} />
        <Route path = '/about'component = {About}/> 
      </div> 
    </Router>
    )
  }
}

export default App;