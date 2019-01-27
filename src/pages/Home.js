import React, { Component } from 'react';
import NavbarDark from '../components/NavbarDark';
import NavbarBooking from '../components/NavbarBooking';

class Home extends Component {
  render() {
    return (
      <div style={{
            marginTop: '46px'
          }}>
        <NavbarDark />
        <NavbarBooking />
        <div className="jumbotron bg-danger rounded-0"
          style={{
            height: '510px'
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
