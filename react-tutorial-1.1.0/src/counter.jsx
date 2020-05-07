import React, {Component} from 'react';

export default class Counter extends Component {
    state = {
        value: 1
    };

    getValue() {
        return 2 + 4;
    }

    // render() {
    // return (<div> <h1>State { this.state.value } </h1><h2>{this.getValue()}</h2> </div>)
    // }

    render() {
        return (
           <div>
               <div>{this.state.value}</div>
               <button onClick={()=> {this.setState({value: this.state.value + 1})}}> Increment </button>
           </div>
        );
     }
    
}