import React, { Component } from 'react';
import HeaderDark from '../components/HeaderDark';
import HeaderSearch from '../components/HeaderSearch';

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderDark />
        <HeaderSearch />
        <div className="jumbotron bg-dark rounded-0"
        style={{
          height: '550px'
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
