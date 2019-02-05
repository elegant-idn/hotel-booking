import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItem = styled.li`
  line-height: 25px;
`;

class FooterSocial extends Component {
  render() {
    return this.props.footerSocialItems.map((item) => (
      <ListItem className="list-inline-item mx-2">
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
      </ListItem>
    ));
  }
}

export default FooterSocial;
