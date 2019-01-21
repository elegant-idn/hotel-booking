import React, { Component } from 'react';
import logo from './img/papriika-logo-wordmark-white.svg';
import './css/papriika.css';
import './css/App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar navbar-expand-lg">
          <a className="navbar-brand mx-auto mt-3" href="/">
            <img 
              src={logo}
              alt="Papriika logo" 
              width="175px"
              />
          </a>
        </nav>
        <div className="container">
          <div className="text-center mt-5">
            <h2 style={{ marginTop: '16px', marginBottom: '40px' }}>
              Hand curated hotel club.
            </h2>
            <h3 style={{ marginBottom: '8px' }}>
              Coming soon...
            </h3>
            <p className="lead">
              2,300 of the world’s best hotels.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
