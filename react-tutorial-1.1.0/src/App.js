import React, {
  Component
} from 'react';

import NavBar from './components/layout/navBarComponent';
import CountersComponent from './components/countersComponent';

class App extends Component {

  state = {
    counters: [{
        id: 1,
        value: 2,
      },
      {
        id: 2,
        value: 0,
      },
      {
        id: 3,
        value: 0,
      },
      {
        id: 4,
        value: 0,
      },
    ],
  };

  constructor() {

    // LifeCycle Hook Mount 1;
    // constructor base class 
    super();
    console.log("App -Constructor");
    // console.log(this.state);

  }
  // LifeCycle Hook Mount 3;
  componentDidMount() {
    console.log(" App - Mounted")
  }


  deleteCounter = (counterId) => {
    console.log(`Event Handler`, counterId);
    const counters = this.state.counters.filter(
      (item) => item.id !== counterId
    );
    // this.setState({counters: counters});
    // If object Key and value are the same simplify this code like this
    this.setState({
      counters
    });
  };

  resetCounter = () => {
    const counters = this.state.counters.map((item) => {
      item.value = 0;
      return item;
    });
    this.setState({
      counters
    });
  };

  incrementCounter = (counter) => {
    //   console.log(`Incerment ${counter}`);
    //   const counters = [...this.state.counters];
    //   counters[0].value++;
    //   console.log(this.state.counters[0]);

    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = {
      ...counter
    };
    counters[index].value++;
    this.setState({
      counters
    });
  };
  // LifeCycle Hook Mount 2;
  render() {
    console.log(" App - Rendered ");
    return ( <
      React.Fragment >
      <
      NavBar totalCounters = {
        this.state.counters.filter(item => item.value > 0).length
      }
      /> <
      main role = "main"
      className = "container" >
      <
      CountersComponent counters = {
        this.state.counters
      }
      onReset = {
        this.resetCounter
      }
      onIncrement = {
        this.incrementCounter
      }
      onDelete = {
        this.deleteCounter
      }
      /> < /
      main > <
      /React.Fragment>
    )
  }
}

export default App;