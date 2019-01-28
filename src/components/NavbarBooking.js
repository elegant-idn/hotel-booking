import React, { Component } from 'react';
import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/airbnb.css';
import '../css/flatpickr.css';

class NavbarBooking extends Component {
  constructor() {
    super();
 
    this.state = {
      date: new Date()
    };
  }
  render() {
    const { date } = this.state;
    return (
      <div className="container-fluid bg-white d-none d-md-block">
        <div className="row">
          <div className="container navbar-booking bg-white">
            <h3>Access 2,300 of the world’s best curated hotels.</h3>
            <form>
              <div className="form-row">
                <div className="col"
                  style={{
                    paddingRight: '0'
                  }}>
                  <label htmlFor="destination" className="navbar-label-destination">
                    Where would you like to go?
                  </label>
                  <input 
                    type="text"
                    autoComplete="off"
                    maxLength="80"
                    tabIndex="0"
                    id="destination"
                    className="form-control form-control-navbar-booking"
                    placeholder="Destination or hotel name"
                    aria-invalid="false"
                    aria-controls="destination-dropdown"
                    aria-label="Where would you like to go?"
                    aria-activedescendant="destination-dropdown-item-0"
                    name="destination"
                    list="destinations"
                  />
                  <datalist id="destinations">
                    <option value="New York, United States"></option>
                    <option value="Los Angeles, United States"></option>
                    <option value="Paris, France"></option>
                    <option value="London, United Kingdom"></option>
                    <option value="Miami, United States"></option>
                    <option value="Hong Kong, China"></option>
                    <option value="Berlin, Germany"></option>
                    <option value="San Francisco, United States"></option>
                    <option value="Singapore, Singapore"></option>
                    <option value="Tokyo, Japan"></option>
                    <option value="Hawaii, United States"></option>
                    <option value="Sydney, Australia"></option>
                    <option value="Seoul, Korea"></option>
                  </datalist>
                </div>
                <div className="col"
                  style={{
                    paddingRight: '0'
                  }}>
                  <label htmlFor="dates" className="navbar-label-dates d-block">
                    Dates
                  </label>
                  <Flatpickr
                    className="form-control form-control-navbar-booking"
                    placeholder="Check in"
                    aria-invalid="false"
                    aria-controls="dates-dropdown"
                    aria-label="Check in date"
                    aria-activedescendant="dates-dropdown-item-0"
                    name="dates"
                    value={[date, new Date().fp_incr(2)]}
                    options={{ 
                      mode: "range",
                      minDate: "today",
                      dateFormat: "M j, Y"
                    }}
                    onChange={(date, str) => { console.info(str); }}
                  />
                </div>
                <div className="px-1"
                  style={{
                    paddingRight: '0'
                  }}>
                  <button type="submit" className="btn btn-primary btn-navbar-booking">
                    Search
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default NavbarBooking;
