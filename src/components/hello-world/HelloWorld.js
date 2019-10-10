// Import React Framework
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Import Css
import './HelloWorld.css';

export class HelloWorld extends Component {
  static propTypes = {
    text: PropTypes.string
  };

  static defaultProps = {
    text: ''
  };

  render() {
    const { text } = this.props;
    return (
      <div className="hello">
        <h2>hello world</h2>
        <div>{text}</div>
      </div>
    );
  }
}
