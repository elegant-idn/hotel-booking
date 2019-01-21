import React, { Component } from 'react';
import HeaderDark from '../components/HeaderDark';

class Home extends Component {
  render() {
    return (
      <div className="d-flex w-100 h-100 mx-auto px-4 flex-column">
        <HeaderDark />
        <div 
          style={{
            paddingTop: '115px'
          }}>
        </div>
      </div>
    );
  }
}

export default Home;
