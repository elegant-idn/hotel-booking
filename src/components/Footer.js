import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer 
        className={`container-fluid ${this.props.className}`}
        style={this.props.style}>
        <div className="text-white-50 text-footer font-weight-bold">
          <ul className="list-inline my-2">
            <li className="list-inline-item mx-2">
              <a href="https://github.com/papriika/" 
                alt="GitHub Papriika (Guy Lepage)"
                className="text-white">
                <FontAwesomeIcon
                  className="mr-1" icon={['fab', 'github']}
                  />
                  &nbsp;GitHub
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://www.facebook.com/papriikaco/" 
                alt="Facebook Papriika (papriikaco)"
                className="text-white">
                <FontAwesomeIcon
                  className="mr-1" icon={['fab', 'facebook']}
                  />
                  &nbsp;Facebook
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://www.instagram.com/papriikaco/" 
                alt="Instagram Papriika (papriikaco)"
                className="text-white">
                <FontAwesomeIcon
                  className="mr-1" icon={['fab', 'instagram']}
                  />
                  &nbsp;Instagram
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://twitter.com/papriikaco" 
                alt="Twitter Papriika (@papriikaco)"
                className="text-white">
                <FontAwesomeIcon
                  className="mr-1" icon={['fab', 'twitter']}
                  />
                  &nbsp;Twitter
              </a>
            </li>
            <li className="list-inline-item mx-2">
              <a href="https://www.pinterest.com/papriika/" 
                alt="Pinterest Papriika (Papriika)"
                className="text-white">
                <FontAwesomeIcon
                  className="mr-1" icon={['fab', 'pinterest']}
                  />
                  &nbsp;Pinterest
              </a>
            </li>
          </ul>
        </div>
        <div className="text-footer text-white-50 font-weight-normal my-1">
          <a 
            href="mailto:support@papriika.com?subject=Mail from GitHub Papriika.com" 
            alt="Contact Papriika"
            className="text-white font-weight-bold">
            Contact
          </a>
        </div>
        <div className="text-footer text-white-50 font-weight-normal">
          Papriika Inc. 
            <CopyrightUpdate 
              style={{
                display: 'inline-block',
                marginLeft: '6px'
              }}
            />
        </div>
      </footer>
    );
  }
}

export default Footer;
