import React, { Component } from 'react';
import HeaderDark from '../components/HeaderDark';
import HeaderBook from '../components/HeaderBook';

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderDark />
        <HeaderBook />
        <div className="jumbotron bg-primary rounded-0"
        style={{
          height: '510px'
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
