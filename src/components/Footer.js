import React, { Component } from 'react';
import CopyrightUpdate from 'copyright-update';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer 
        className={`container-fluid ${this.props.className}`}
        style={this.props.style}>
        <div className="text-white-50 text-footer font-weight-bold mb-3">
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
        <div className="text-footer text-white-50 font-weight-normal mb-5">
          <a 
            href="mailto:inquiries@papriika.com?subject=Papriika membership inquiry | Papriika.com" 
            alt="Papriika membership inquiries"
            className="text-white">
            Memberhip inquiries
          </a>
          &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
          <a 
            href="mailto:support@papriika.com?subject=Mail from GitHub Papriika.com" 
            alt="Contact Papriika"
            className="text-white">
            Other inquiries
          </a>
        </div>
        <div className="text-footer text-white-50 font-weight-normal mb-2">
          Papriika Inc. 
            <CopyrightUpdate 
              style={{
                display: 'inline-block',
                marginLeft: '6px'
              }}
            />
        </div>
        <div className="text-footer text-white-50 font-weight-normal pb-2">
          Papriika Inc. is a <a href="http://universe.engineering" 
            alt="Universe.engineering"
            className="text-white">
              Universe Labs
            </a>
            &nbsp;open source, dapp project.
        </div>
      </footer>
    );
  }
}

export default Footer;
