import React, { Component } from 'react';
import styled from 'styled-components';
import Alert from '../components/Alert';
import NavbarLight from '../components/NavbarLight';
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
          sizeClassName="alert-small"
          colorClassName="alert-black"
          className="text-center"
          >
          Coming soon! Exclusive member rewards.
        </Alert>
        <NavbarLight />
        <div className="container">
          <div className="row">
            <div className="container hero-container bg-primary">
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
            </div>
          </div>
        </div>
        <div className="jumbotron bg-white">
        </div>
        <div className="container">
          <div className="row">
            <Div className="container hero-container">
              <div className="container text-center text-white p-4"
                style={{
                  display: 'table',
                  height: '100%'
                }}>
                <div
                  style={{
                    display: 'table-cell',
                    verticalAlign: 'bottom'
                  }}>
                  <p>
                    <span className="badge"
                      style={{
                        color: '#000',
                        backgroundColor: '#fff',
                        borderRadius: '0',
                        textTransform: 'uppercase',
                        fontSize: '12px',
                        fontWeight: '700',
                        padding: '10px 25px'
                      }}>
                      New!
                    </span>
                  </p>
                  <h5>
                    Waldorf Astoria, Shanghai, China
                  </h5>
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
