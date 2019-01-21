import React, { Component } from 'react';
import logo from './../img/papriika-logo-wordmark-2-white.svg';

class HeaderDark extends Component {
  render() {
    return (
      <nav className="navbar fixed-top" 
        style={{
          height: '90px',
          backgroundColor: '#000'
        }}>
        <a href="/" className="navbar-brand">
          <img 
            src={logo} 
            className="navbar-brand-img"
            alt="Papriika"
          />
        </a>
      </nav>
    );
  }
}

export default HeaderDark;
