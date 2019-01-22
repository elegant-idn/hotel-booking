import React, { Component } from 'react';

const placeholderStyle = {
  margin: '40px',
  border: '5px solid pink'
};


class HeaderSearch extends Component {
  render() {
    return (
      <div className="container-fluid d-none d-lg-block">
        <div className="container mx-auto"
        style={{
          maxWidth: '960px'
        }}>
          <nav className="navbar navbar-light navbar-search" 
          style={{ 
            marginTop: '90px',
            padding: '0'
          }}>           
            <form className="w-100">
              <div className="form-row" 
              style={{
                borderRight: '1px solid #eee',
                borderLeft: '1px solid #eee',
              }}>
                <div className="form-group form-group-navbar-search" 
                  style={{
                    borderRight: '1px solid #eee'
                  }}>
                  <label for="destination"
                    style={{
                      width: '250px',
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      lineHeight: '14px',
                      marginTop: '29px',
                      marginBottom: '0',
                      marginLeft: '20px'
                    }}>
                    Where would you like to go?
                  </label>
                  <input 
                    type="text"
                    role="textbox"
                    autocomplete="off"
                    autofocus="autofocus"
                    maxlength="60"
                    tabindex="0"
                    id="destination"
                    className="form-control"
                    style={{
                      border: 'none',
                      height: '30px',
                      color: '#005bf7',
                      fontSize: '16px',
                      letterSpacing: '-0.03em',
                      fontWeight: '500',
                      marginLeft: '7px',
                      width: '250px'
                    }}
                    placeholder="Destination or hotel name"
                    aria-invalid="false"
                    aria-controls="destination-dropdown"
                    aria-label="Where would you like to go?"
                    aria-activedescendant="destination-dropdown-item-0"
                    name="destination"
                  />
                </div>
                <div className="form-group col-md-3 form-group-navbar-search"
                  style={{
                    borderRight: '1px solid #eee'
                  }}>
                  <label for="dates" className="d-block"
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      lineHeight: '14px',
                      marginTop: '29px',
                      marginBottom: '6px',
                      marginLeft: '13px'
                    }}>
                    Dates
                  </label>
                  <input
                    type="text"
                    role="textbox"
                    autocomplete="off"
                    maxlength="10"
                    tabindex="0"
                    id="dates"
                    className="form-control col-md-6 d-inline"
                    style={{
                      border: 'none',
                      height: '30px',
                      color: '#005bf7',
                      fontSize: '16px',
                      letterSpacing: '-0.03em',
                      fontWeight: '500'
                    }}
                    placeholder="Check in"
                    aria-invalid="false"
                    aria-controls="dates-dropdown"
                    aria-label="Check in date"
                    aria-activedescendant="dates-dropdown-item-0"
                    name="dates"
                  />
                  <input 
                    type="text"
                    role="textbox"
                    autocomplete="off"
                    maxlength="10"
                    tabindex="0"
                    id="dates"
                    className="form-control col-md-6 d-inline"
                    style={{
                      border: 'none',
                      height: '30px',
                      color: '#005bf7',
                      fontSize: '16px',
                      letterSpacing: '-0.03em',
                      fontWeight: '500'
                    }}
                    placeholder="Check out"
                    aria-invalid="false"
                    aria-controls="dates-dropdown"
                    aria-label="Check out date"
                    aria-activedescendant="dates-dropdown-item-0"
                    name="dates"
                  />
                </div>
                <div className="form-group form-group-navbar-search text-center"
                  style={{
                    width: '99.6px',
                    paddingLeft: '10px'
                  }}>
                  <label for="adults"
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      lineHeight: '14px',
                      marginTop: '29px',
                      marginBottom: '0'
                    }}>
                    Adults
                  </label>
                  <input 
                    type="number"
                    role="textbox"
                    autocomplete="off"
                    maxlength="60"
                    tabindex="0"
                    id="adults"
                    className="form-control"
                    style={{
                      border: 'none',
                      height: '30px',
                      color: '#005bf7',
                      fontSize: '16px',
                      letterSpacing: '-0.03em',
                      fontWeight: '500',
                      textAlign: 'center'
                    }}
                    placeholder="2"
                    aria-invalid="false"
                    aria-controls="adults-dropdown"
                    aria-label="Number of adults?"
                    aria-activedescendant="adults-dropdown-item-0"
                    name="adults"
                  />
                </div>
                <div className="form-group form-group-navbar-search text-center"
                  style={{
                    width: '99.6px'
                  }}>
                  <label for="children"
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      lineHeight: '14px',
                      marginTop: '29px',
                      marginBottom: '0'
                    }}>
                    Children
                  </label>
                  <input 
                    type="number"
                    role="textbox"
                    autocomplete="off"
                    maxlength="60"
                    tabindex="0"
                    id="children"
                    className="form-control"
                    style={{
                      border: 'none',
                      height: '30px',
                      color: '#005bf7',
                      fontSize: '16px',
                      letterSpacing: '-0.03em',
                      fontWeight: '500',
                      textAlign: 'center'
                    }}
                    placeholder="0"
                    aria-invalid="false"
                    aria-controls="children-dropdown"
                    aria-label="Number of children?"
                    aria-activedescendant="children-dropdown-item-0"
                    name="children"
                  />
                </div>
                <div className="form-group form-group-navbar-search text-center" 
                  style={{
                    width: '99.6px',
                    paddingRight: '10px'
                  }}>
                  <label for="rooms"
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      lineHeight: '14px',
                      marginTop: '29px',
                      marginBottom: '0'
                    }}>
                    Rooms
                  </label>
                  <input 
                    type="number"
                    role="textbox"
                    autocomplete="off"
                    maxlength="60"
                    tabindex="0"
                    id="rooms"
                    className="form-control"
                    style={{
                      border: 'none',
                      height: '30px',
                      color: '#005bf7',
                      fontSize: '16px',
                      letterSpacing: '-0.03em',
                      fontWeight: '500',
                      textAlign: 'center'
                    }}
                    placeholder="1"
                    aria-invalid="false"
                    aria-controls="rooms-dropdown"
                    aria-label="Number of rooms?"
                    aria-activedescendant="rooms-dropdown-item-0"
                    name="rooms"
                  />
                </div>
                <div className="form-group form-group-navbar-search ml-auto"
                  style={{
                    height: '105px',
                    padding: '0'
                  }}>
                  <button type="submit" class="btn btn-primary rounded-0"
                    style={{
                      fontSize: '12px',
                      fontWeight: '700',
                      textTransform: 'uppercase',
                      lineHeight: '14px',
                      height: '105px',
                      paddingRight: '40px',
                      paddingLeft: '40px'
                    }}>
                    Search
                  </button>
                </div>
              </div>
            </form>
          </nav>
        </div>
      </div>
    );
  }
}

export default HeaderSearch;
