import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class FooterSocial extends Component {
  render() {
    return this.props.footerSocialItems.map((item) => (
      
          <li className="list-inline-item mx-2">
            <a 
              href={item.href} 
              alt={item.alt}
              className="text-white">
              <FontAwesomeIcon 
                className="mr-1" 
                icon={[`fab`, `${item.icon}`]}
                />
                &nbsp;{item.text}
            </a>
          </li>
        
    ));
  }
}

export default FooterSocial;




      