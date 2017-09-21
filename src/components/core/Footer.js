import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = styled.footer`
  background-color: #343434;
  padding: .3em 0;
  width: 100%;
  min-height: 106px;
  text-align: center;
  font-size: 13px;
`;
const FooterLinks = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;
const FooterItem = styled.li`
  display: inline-block;
  text-align: center;
  margin: 1em 0;
  color: #fff;
  &:after {
    content: '|';
    padding: 0 .5em;
    display: inline-block;
    color: #fff;
  }
  &:last-child:after {
    content: '';
  }
  a {
    text-decoration: none;
    color: #fff;

    &:hover,
    &:active,
    &:focus {
      text-decoration: underline;
    }
  }
`;

export default class FooterComponent extends Component {
  render() {
    return (
      <Footer>
        <FooterLinks>
          <FooterItem><Link to="http://www.agriculture.gov.au/about/copyright" target="_blank">&copy; Commonwealth of Australia 2017</Link></FooterItem>
          <FooterItem><Link to="http://www.agriculture.gov.au/about/accessibility" target="_blank">Accessibility</Link></FooterItem>
          <FooterItem><Link to="http://www.agriculture.gov.au/about/site_map" target="_blank">Site map</Link></FooterItem>
          <FooterItem><Link to="http://www.agriculture.gov.au/about/privacy" target="_blank">Privacy</Link></FooterItem>
          <FooterItem><Link to="http://www.agriculture.gov.au/about/disclaimer" target="_blank">Disclaimer</Link></FooterItem>
          <FooterItem><Link to="http://www.agriculture.gov.au/about/contactus" target="_blank">Contact us</Link></FooterItem>
          <FooterItem><Link to="http://australia.gov.au" target="_blank">australia.gov.au</Link></FooterItem>
        </FooterLinks>
      </Footer>
    );
  }
}
