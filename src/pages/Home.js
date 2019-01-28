import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarDark from '../components/NavbarDark';
import NavbarBooking from '../components/NavbarBooking';
import Background from './../img/hotels/hotel-img-waldorf-astoria-beijing.jpg';

const Div = styled.div`
    background: linear-gradient(
      rgba(0, 0, 0, 0.45), 
      rgba(0, 0, 0, 0.45)
    ), url(${Background});
    background-size: cover;
    background-position: center;
`;

class Home extends Component {
  render() {
    return (
      <div style={{
            marginTop: '46px'
          }}>
        <NavbarDark />
        <NavbarBooking />
        <Div className="container hero-container rounded-0"
          style={{
            padding: '0',
            marginBottom: '0'
          }}>
          <div className="container d-sm-block d-md-none text-center"> 
            <h2 className="text-white pt-9 pb-9"
              style={{
                zIndex: '5000',
                Background: 'transparent'
              }}>Access over 2,300 of the world’s best hotels.</h2>
          </div>
          <div className="mx-auto text-white"
            style={{
              height: '540px'
            }}>
            <div className="container text-center p-5">
              <p className="d-md-block">
                <span className="badge"
                  style={{
                    color: '#000',
                    backgroundColor: '#fff',
                    borderRadius: '0',
                    textTransform: 'uppercase',
                    fontSize: '12px',
                    fontWeight: '700',
                    padding: '10px 25px'
                  }}>New!</span>
              </p>
              <p className="lead-md d-md-block">
                Waldorf Astoria, Shanghai, China
              </p>
            </div>
          </div>
        </Div>
      </div>
    );
  }
}

export default Home;
