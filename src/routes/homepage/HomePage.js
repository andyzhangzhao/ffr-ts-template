// Import React Component
import React, { Component } from 'react';

// Import Customized Component
import HelloWorld from '../../components/hello-world';

export default class HomePage extends Component {
  render() {
    return <HelloWorld text="welcome to sf react framework" />;
  }
}
