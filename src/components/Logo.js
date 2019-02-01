import React, { Component } from 'react';
import LogoWordmarkDark from './../img/papriika-logo-wordmark-1.svg';

class Logo extends Component {
  render() {
    return (
      <img
        src={LogoWordmarkDark}
        className={`${this.props.className}`}
        alt={`${this.props.logoAlt}`}
        style={this.props.style}
        />
    );
  }
}

export default Logo;
