import React, { Component } from 'react';
import HeaderDark from '../components/HeaderDark';

class Home extends Component {
  render() {
    return (
      <div>
        <HeaderDark />
        <div className="container"
        style={{
          paddingTop: '115px',
          backgroundColor: 'blue'
        }}>
          <div class="row">
            <div className="container" 
            style={{
              height: '300px',
              backgroundColor: 'red'
            }}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
