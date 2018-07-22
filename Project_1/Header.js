import React, { Component } from 'react';
import './App.css';

class Header extends Component {
  render() {
    return (
      <div className="header">
        <h1>React Search!</h1>
        <p>Here is a list of Reggae artists rendered from a JSON object</p>
      </div>
    );
  }
}

export default Header;
