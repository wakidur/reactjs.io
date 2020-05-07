import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ComponentsAndProps extends Component {
  static propTypes = {
    propsvalpass: PropTypes.array.isRequired,
    name: PropTypes.string,
    author: PropTypes.object.isRequired,
    text: PropTypes.string,
    date: PropTypes.any.isRequired
    
  };

  formatDate = (date) => {
    return date.toLocaleDateString();
  }

  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        Hello Components and Props{' '}
        {this.props.propsvalpass.map((item, index) => (
          <p key={index}>{item.name}</p>
        ))}
        <div className="Comment">
          <div className="UserInfo">
            <img
              className="Avatar"
              src={this.props.author.avatarUrl}
              alt={this.props.author.name}
            />
            <div className="UserInfo-name">{this.props.author.name}</div>
          </div>
          <div className="Comment-text">{this.props.text}</div>
          <div className="Comment-date">
        {this.formatDate(this.props.date)}
      </div>
        </div>
      </div>
    );
  }
}
