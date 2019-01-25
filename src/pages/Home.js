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
            height: '510px',
            backgroundColor: 'rgb(237, 221, 198)'
          }}>
          <div className="col-md-6 offset-md-3 text-center text-white">
            <h1>Get early access to the world’s best hotels, resorts, clubs & more…</h1>
          </div>
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
