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
            <h1>
              Coming soon...
            </h1>
            <p style={{ fontSize: '18px', marginTop: '16px' }}>The world’s best hotels, hand curated.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
