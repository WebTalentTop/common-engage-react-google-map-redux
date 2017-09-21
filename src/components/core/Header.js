import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Header = styled.header`
  background: #857d6e;
  padding: 16px 0 20px 0;
  a{
    paddingLeft: 3em
  }
`;

export default class HeaderComponent extends Component {
  render() {
    return (
      <Header>
        <Link to="http://www.agriculture.gov.au" target="_blank">
          <img alt="logo" src="images/logo.png"/>
        </Link>
      </Header>
    );
  }
}
