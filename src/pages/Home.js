import React, { Component } from 'react';
import styled from 'styled-components';
import NavbarDark from '../components/NavbarDark';
import NavbarBooking from '../components/NavbarBooking';
import Background from './../img/hotels/hotel-img-waldorf-astoria-beijing.jpg';

const Div = styled.div`
    background-image: url(${Background});
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
        <Div className="jumbotron rounded-0 overlay overlay-dark"
          style={{
            padding: '0',
            marginBottom: '0'
          }}>
          <div className="d-none d-md-block col-md-6 col-xl-4 ml-auto text-white hero-box-content"
            style={{
              height: '540px'
            }}>
            <div className="container text-center p-5">
              <p className="d-md-block">
                <span className="badge"
                  style={{
                    color: '#1700c4',
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
