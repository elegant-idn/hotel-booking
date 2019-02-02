import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import Background from './../img/hotels/hotel-142-shanghai-puli-hotel-spa-01.jpg';

const Overlay = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)
  ), url(${Background});
  background-size: cover;
  background-position: center;
  height: 500px;

  @media (min-width: 768px) {
    height: 600px;
  }
`;

// Using a ES6 class component as it contains state.
class Home extends Component {
  render() {
    return (
      <div>
        <Alert
          size="alert-small"
          color="alert-black"
          className="text-center"
          style={{
            marginBottom: 0
          }}
          >
          Coming soon! Exclusive member rewards.
        </Alert>

        <Navbar colorScheme="navbar-light"/>
        <div className="container pl-0 pl-sm-3 pr-0 pr-sm-3">
          <div className="row no-gutters">
            <Overlay className="col d-flex align-items-center justify-content-center text-white p-4">
              <h3 className="text-center">
                Access over 2,300 of the world’s best hotels.
              </h3>
            </Overlay>
          </div>
        </div>
        <div className="jumbotron bg-white">
        </div>
      </div>
    );
  }
}

export default Home;
