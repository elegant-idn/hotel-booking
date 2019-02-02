import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import Background from './../img/hotels/hotel-142-shanghai-puli-hotel-spa-01.jpg';

const Div = styled.div`
    background: linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ), url(${Background});
    background-size: cover;
    background-position: center;
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
          style={{marginBottom: 0}}
          >
          Coming soon! Exclusive member rewards.
        </Alert>
        <Navbar
          colorScheme="navbar-light"
          style={{
            backgroundColor: '#fff'
          }}
        />

        <div className="container">
          <div className="row">
            <Div className="container hero-container bg-primary">
              <div className="container hero-container">
                <div className="container text-center text-white p-4"
                  style={{
                    display: 'table',
                    height: '100%'
                  }}>
                  <div
                    style={{
                      display: 'table-cell',
                      verticalAlign: 'middle'
                    }}>
                    <h3>
                      Access over 2,300 of the world’s best hotels.
                    </h3>
                  </div>
                </div>
              </div>
            </Div>
          </div>
        </div>
        <div className="jumbotron bg-white">
        </div>
      </div>
    );
  }
}

export default Home;
