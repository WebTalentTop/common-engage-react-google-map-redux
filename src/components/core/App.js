import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleRoot } from 'radium';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const SiteWrapper = styled.div`
  min-height: 100%;
  margin-bottom: -106px;
`;

// TODO waiting for Gilles confirm for use `em` or `px`
const MainContent = styled.div`
  padding: 3em;
  @media (max-width: 768px), only screen and (max-device-width: 768px){
    padding: 1em;
  }
`;

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <SiteWrapper>
        <StyleRoot>
          <Header />
          <MainContent>
            {this.props.children}
          </MainContent>
          <Footer />
        </StyleRoot>
      </SiteWrapper>
    );
  }
}
