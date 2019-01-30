import React, { Component } from 'react';
import styled from 'styled-components';
import AlertSmall from '../components/AlertSmall';
import NavbarDark from '../components/NavbarDark';
import HeaderBooking from '../components/HeaderBooking';
import Background from './../img/hotels/hotel-142-shanghai-puli-hotel-spa-01.jpg';

const Div = styled.div`
    background: linear-gradient(
      rgba(0, 0, 0, 0.5), 
      rgba(0, 0, 0, 0.5)
    ), url(${Background});
    background-size: cover;
    background-position: center;
`;

class Home extends Component {
  render() {
    return (
      <div>
        <AlertSmall />
        <NavbarDark />
        <HeaderBooking />
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
