import React, { Component } from 'react';
import FooterSocial from '../components/FooterSocial';
import CopyrightUpdate from 'copyright-update';

class Footer extends Component {
  state = {
    footerSocialItems: [
      {
        id: 1,
        href: 'https://github.com/papriika/',
        alt: 'GitHub Papriika (Papriika)',
        icon: 'github',
        text: 'GitHub'
      },
      {
        id: 2,
        href: 'https://www.facebook.com/papriikaco/',
        alt: 'Facebook Papriika (papriikaco)',
        icon: 'facebook',
        text: 'Facebook'
      },
      {
        id: 3,
        href: 'https://www.instagram.com/papriikaco/',
        alt: 'Instagram Papriika (papriikaco)',
        icon: 'instagram',
        text: 'Instagram'
      },
      {
        id: 4,
        href: 'https://twitter.com/papriikaco',
        alt: 'Twitter Papriika (@papriikaco)',
        icon: 'twitter',
        text: 'Twitter'
      },
      {
        id: 5,
        href: 'https://www.pinterest.com/papriika/',
        alt: 'Pinterest Papriika (Papriika)',
        icon: 'pinterest',
        text: 'Pinterest'
      }
    ]
  }

  render() {
    return (
      <footer 
        className={`container-fluid ${this.props.className}`}
        style={this.props.style}>
        <div className="text-white-50 text-footer font-weight-bold mb-5">
          <ul className="list-inline my-2">
            <FooterSocial 
              footerSocialItems={this.state.footerSocialItems} 
            />
          </ul>
        </div>
        <div className="text-footer text-white-50 font-weight-normal mb-5">
          <a 
            href="mailto:inquiries@papriika.com?subject=Papriika membership inquiry | Papriika.com" 
            alt="Papriika membership inquiries"
            className="text-white">
            Membership inquiries
          </a>
          &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
          <a 
            href="mailto:support@papriika.com?subject=Mail from GitHub Papriika.com" 
            alt="Contact Papriika"
            className="text-white">
            General inquiries
          </a>
        </div>
        <div className="text-footer text-white-50 font-weight-normal mb-2">
          <CopyrightUpdate 
            style={{
              display: 'inline-block'
            }}
          />
          &nbsp;Papriika Inc.
        </div>
        <div className="text-footer text-white-50 font-weight-normal pb-2">
          Papriika is a <a href="http://universe.engineering" 
            alt="Universe.engineering"
            className="text-white">
              Universe Labs
            </a>
            &nbsp;open source, dapp initiative.
        </div>
      </footer>
    );
  }
}

export default Footer;
