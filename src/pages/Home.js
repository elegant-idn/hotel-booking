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
        <div className="jumbotron d-flex align-items-center rounded-0 bg-primary">
          <div className="container col-xl-8 offset-xl-2 text-center text-white ">
            <h1 className="display-4"
              style={{
                fontWeight: '800'
              }}>
              Coming soon..
            </h1>
            <h1 
              style={{
                fontWeight: '800'
              }}>
              Access to the world’s best hotels, resorts, clubs & more…
            </h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
