import React, { Component } from 'react';
import logo from './../img/papriika-logo-wordmark-2-white.svg';

class HeaderDark extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-md navbar-dark"
        style={{
          backgroundColor: '#000'
        }}>
        <div className="container fixed-top navbar-fixed-container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarBasic" aria-controls="navbarBasic" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <a href="/" className="navbar-brand">
            <img 
              src={logo} 
              className="navbar-brand-img"
              alt="Papriika"
            />
          </a>
          <div className="collapse navbar-collapse" id="navbarBasic"
            style={{
              backgroundColor: '#000',
              marginTop: '15px'
            }}>
            <div className="navbar-text text-white"
              style={{
                fontSize: '15px',
                fontWeight: '700',
                paddingBottom: '15px'
              }}>
              The world’s best hotels, hand curated
            </div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default HeaderDark;
