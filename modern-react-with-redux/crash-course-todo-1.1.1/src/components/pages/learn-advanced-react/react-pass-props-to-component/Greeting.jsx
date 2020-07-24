// import React, { Component } from 'react';

// export default class Greeting extends Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.greeting}</h1> 
//       </div>
//     );
//   }
// }

import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ greeting, isShow }) => isShow ? <h1>{greeting}</h1> : null;

Greeting.propTypes = {
    greeting: PropTypes.string,
    isShow: PropTypes.bool
}

export default Greeting


