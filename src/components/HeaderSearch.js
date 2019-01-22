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
            marginTop: '105px',
            padding: '0'
          }}>           
            <form className="w-100">
              <div className="form-row" 
              style={{
                borderRight: '1px solid #eee',
                borderLeft: '1px solid #eee',
              }}>
                <div className="form-group col-md-4 form-group-navbar-search" 
                style={{
                  borderRight: '1px solid #eee'
                }}>
                  <label for="navbarSearch"
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    marginTop: '24px',
                    marginBottom: '0',
                    marginLeft: '13px'
                  }}>Where would you like to go?</label>
                  <input 
                  type="search" 
                  className="form-control" 
                  style={{
                    border: 'none'
                  }}
                  id="navbarSearch" 
                  placeholder="Destination or hotel name" />
                </div>
                <div className="form-group col-md-3 form-group-navbar-search"
                style={{
                  borderRight: '1px solid #eee'
                }}>
                  <label for="exampleFormControlInput1" className="d-block"
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    marginTop: '24px',
                    marginBottom: '0',
                    marginLeft: '13px'
                  }}>Dates</label>
                  <input 
                  type="search" 
                  className="form-control col-md-6 d-inline" 
                  style={{
                    border: 'none'
                  }}
                  id="navbarSearch" 
                  placeholder="Check in" />
                  <input 
                  type="search" 
                  className="form-control col-md-6 d-inline" 
                  style={{
                    border: 'none'
                  }}
                  id="navbarSearch" 
                  placeholder="Check in" />
                </div>
                <div className="form-group col-md-3 form-group-navbar-search"
                style={{
                  borderRight: '1px solid #eee'
                }}>
                  <label for="exampleFormControlInput1"
                  style={{
                    fontSize: '12px',
                    fontWeight: '700',
                    textTransform: 'uppercase',
                    marginTop: '24px',
                    marginBottom: '0',
                    marginLeft: '13px'
                  }}>Dates</label>
                  <input 
                  type="search" 
                  className="form-control" 
                  style={{
                    border: 'none'
                  }}
                  id="navbarSearch" 
                  placeholder="Check in" />
                </div>
                <div className="form-group col-md-1 form-group-navbar-search bg-success"
                style={{
                  height: '105px',
                  padding: '0'
                }}>
                <button type="submit" class="btn btn-primary rounded-0"
                style={{
                  height: '105px'
                }}>Search</button>
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
