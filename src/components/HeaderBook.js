import React, { Component } from 'react';

class HeaderBook extends Component {
  render() {
    return (
      <div className="container-fluid bg-white d-none d-md-block">
        <div className="row">
          <div className="container mx-auto navbar-search-wrapper"
            style={{
              maxWidth: '960px'
            }}>
            <nav className="navbar navbar-search bg-white">
              <form className="w-100">
                <div className="form-row navbar-row-navbar-search">
                  <div className="form-group form-group-navbar-search navbar-booking d-inline">
                    <label htmlFor="destination" className="navbar-label-destination">
                      Where would you like to go?
                    </label>
                    <input 
                      type="text"
                      autoComplete="off"
                      autoFocus="autofocus"
                      maxLength="60"
                      tabIndex="0"
                      id="destination"
                      className="form-control navbar-input-destination"
                      style={{
                        marginLeft: '7px'
                      }}
                      placeholder="Destination or hotel name"
                      aria-invalid="false"
                      aria-controls="destination-dropdown"
                      aria-label="Where would you like to go?"
                      aria-activedescendant="destination-dropdown-item-0"
                      name="destination"
                    />
                  </div>
                  <div className="form-group col-md-4 col-lg-3 form-group-navbar-search d-none d-md-block"
                    style={{
                      borderRight: '1px solid #eee'
                    }}>
                    <label htmlFor="dates" className="navbar-label-dates d-block">
                      Dates
                    </label>
                    <input
                      type="text"
                      autoComplete="off"
                      maxLength="10"
                      tabIndex="0"
                      id="dates"
                      className="form-control navbar-input-dates col-md-6 d-inline"
                      placeholder="Check in"
                      aria-invalid="false"
                      aria-controls="dates-dropdown"
                      aria-label="Check in date"
                      aria-activedescendant="dates-dropdown-item-0"
                      name="dates"
                    />
                    <input 
                      type="text"
                      autoComplete="off"
                      maxLength="10"
                      tabIndex="0"
                      id="dates"
                      className="form-control navbar-input-dates col-md-6 d-inline"
                      placeholder="Check out"
                      aria-invalid="false"
                      aria-controls="dates-dropdown"
                      aria-label="Check out date"
                      aria-activedescendant="dates-dropdown-item-0"
                      name="dates"
                    />
                  </div>
                  <div className="form-group form-group-navbar-search-adults text-center d-none d-lg-block"
                    style={{
                      paddingLeft: '10px'
                    }}>
                    <label htmlFor="adults" className="navbar-label-adults text-center">
                      Adults
                    </label>
                    <input 
                      type="number"
                      autoComplete="off"
                      maxLength="60"
                      tabIndex="0"
                      id="adults"
                      className="form-control navbar-input-adults"
                      placeholder="2"
                      aria-invalid="false"
                      aria-controls="adults-dropdown"
                      aria-label="Number of adults?"
                      aria-activedescendant="adults-dropdown-item-0"
                      name="adults"
                    />
                  </div>
                  <div className="form-group form-group-navbar-search-children text-center d-none d-lg-block">
                    <label htmlFor="children" className="navbar-label-children text-center">
                      Children
                    </label>
                    <input 
                      type="number"
                      autoComplete="off"
                      maxLength="60"
                      tabIndex="0"
                      id="children"
                      className="form-control navbar-input-children"
                      placeholder="0"
                      aria-invalid="false"
                      aria-controls="children-dropdown"
                      aria-label="Number of children?"
                      aria-activedescendant="children-dropdown-item-0"
                      name="children"
                    />
                  </div>
                  <div className="form-group form-group-navbar-search-rooms text-center d-none d-md-block" 
                    style={{
                      paddingRight: '10px'
                    }}>
                    <label htmlFor="rooms" className="navbar-label-rooms text-center">
                      Rooms
                    </label>
                    <input 
                      type="number"
                      autoComplete="off"
                      maxLength="60"
                      tabIndex="0"
                      id="rooms"
                      className="form-control navbar-input-rooms"
                      placeholder="1"
                      aria-invalid="false"
                      aria-controls="rooms-dropdown"
                      aria-label="Number of rooms?"
                      aria-activedescendant="rooms-dropdown-item-0"
                      name="rooms"
                    />
                  </div>
                  <div className="form-group ml-auto d-none d-md-block"
                    style={{
                      padding: '0',
                      marginBottom: '0'
                    }}>
                    <button type="submit" className="btn btn-primary btn-navbar-search rounded-0">
                      Search
                    </button>
                  </div>
                </div>
              </form>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default HeaderBook;
