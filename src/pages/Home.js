import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarDark from '../components/NavbarDark';
import NavbarBooking from '../components/NavbarBooking';
import Background from './../img/hotels/hotel-img-waldorf-astoria-beijing.jpg';

const Div = styled.div`
    background-image: url(${Background});
    background-size: cover;
`;

class Home extends Component {
  render() {
    return (
      <div style={{
            marginTop: '46px'
          }}>
        <NavbarDark />
        <NavbarBooking />
        <Div className="jumbotron d-flex align-items-center rounded-0 overlay overlay-dark">
          <div className="container col-xl-8 offset-xl-2 text-center text-white">
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
        </Div>
      </div>
    );
  }
}

export default Home;
