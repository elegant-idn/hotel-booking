import React, { Component } from 'react';

class AlertSmall extends Component {
  render() {
    return (
      <header className="nav-down">
        <a href="/">
          <nav className="navbar navbar-banner navbar-dark"
            style={{
              backgroundColor: '#131417',
              height: '35px'
            }}>
            <span className="navbar-text navbar-text-banner">
              Join today!
            </span>
          </nav>
        </a>
      </header>
    );
  }
}

export default AlertSmall;
