import React, { Component } from 'react';
import styled from 'styled-components';
import FooterSocial from '../components/FooterSocial';
import CopyrightUpdate from 'copyright-update';

const Div = styled.div`
  display: inline-block;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  background-color: rgba(255,255,255,0.055);
  padding: 16px;
  border-radius: 6px;
  max-width: 650px;
`;

const FooterFeature = styled.div`
  display: inline-block;

  @media (max-width:348px) {
    display: block;
    line-height: 35px;
  }
`;
const Middot = styled.span`
  @media (max-width:348px) {
    display: none;
  }
`;

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
        <div className="small text-white-50 font-weight-bold mb-5">
          <ul className="list-inline my-2">
            <FooterSocial 
              footerSocialItems={this.state.footerSocialItems} 
            />
          </ul>
        </div>
        <Div className="col-md-9 col-lg-8 mx-auto text-footer text-white-50 mb-5">
          <FooterFeature>
            <a 
              href="mailto:inquiries@papriika.com?subject=Papriika membership inquiry | Papriika.com" 
              alt="Papriika membership inquiries"
              className="inline text-white">
              Membership inquiries
            </a>
          </FooterFeature>
          <Middot>
            &nbsp;&nbsp;&nbsp;&middot;&nbsp;&nbsp;&nbsp;
          </Middot>
          <FooterFeature>
            <a 
              href="mailto:support@papriika.com?subject=Mail from GitHub Papriika.com" 
              alt="Contact Papriika"
              className="inline text-white">
              Contact
            </a>
          </FooterFeature>
        </Div>
        <div className="small text-white-50 letter-space mb-2">
          <CopyrightUpdate 
            style={{
              display: 'inline-block'
            }}
          />
          &nbsp;Papriika Inc.
        </div>
        <div className="small text-white-50 letter-space pb-2">
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
