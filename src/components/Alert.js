import React, { Component } from 'react';

class Alert extends React.Component {
  render() {
    return (
      <div 
        className={`alert ${this.props.className} ${this.props.sizeClassName} ${this.props.colorClassName}`}
        style={this.props.style}
        >
        {this.props.children}
      </div>
    );
  }
}

export default Alert;