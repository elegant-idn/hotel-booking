import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from '../components/Alert';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
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
    height: 660px;
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
        <div className="container-fluid pl-0 pr-0 hero">
          <div className="row no-gutters">
            <Overlay className="col d-flex align-items-center justify-content-center text-white p-4">
              <div className="container">
                <h1 className="display-3 text-center"
                  style={{
                    fontFamily: 'Judson, serif',
                    fontWeight: '500'
                  }}>
                  Access over 2,300 of the world’s best hotels.
                </h1>
              </div>
            </Overlay>
          </div>
        </div>
        <Alert
          color="alert-primary"
          className="text-center"
          style={{
            marginBottom: 0
          }}
          >
          Early members receive <span style={{fontWeight: '900'}}>50% off</span> membership!
        </Alert>
        <Alert
          color="alert-black"
          className="text-center"
          style={{
            marginBottom: 0,
            textTransform: 'none'
          }}
          >
          We use the blockchain as a source of truth, guaranteeing <span style={{fontWeight: '900'}}>Travellers</span> and <span style={{fontWeight: '900'}}>Hôteliers</span> the best rates.
        </Alert>
        <Footer 
          className="mx-auto text-center p-5 mt-9"
          style={{
            backgroundColor: '#000'
          }}
          />
      </div>

    );
  }
}

export default Home;
