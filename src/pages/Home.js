import React, { Component } from 'react';
import HeaderDark from '../components/HeaderDark';
import HeaderBook from '../components/HeaderBook';

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderDark />
        <HeaderBook />
        <div className="jumbotron rounded-0"
        style={{
          height: '510px',
          backgroundColor: 'rgb(237, 221, 198)'
        }}>
        </div>
        <div className="jumbotron bg-white rounded-0"
        style={{
          height: '550px'
        }}>
        </div>
      </div>
    );
  }
}

export default Home;
