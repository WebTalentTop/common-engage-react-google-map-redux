import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const btnStyle = {
  default: 'marginRight: 10px; backgroundColor: #fff; border: 1px solid #fd594f; color: #fd594f',
  primary: 'backgroundColor: #125589; border: 1px solid #125589; color: #fff;',
};

const Button = styled.button`
  padding: 9px 24px;
  backgroundColor: #FFFEFA;
  color: #125589;
  cursor: pointer;
  border: 1px solid #dedede;
  borderRadius: 3px;
  width: 150px;
  fontSize: 12px;
  fontWeight: bold;
  textTransform: uppercase;
  ${props => (btnStyle[props.btnStyle])};
  @media (max-width: 480px), only screen and (max-device-width: 480px){
    padding: 9px 16px;
    width: auto;
  }
`;

export default class ButtonComponent extends Component {
  static propTypes = {
    btnStyle: PropTypes.string,
    type: PropTypes.string,
    text: PropTypes.string,
  };

  static defaultProps = {
    btnStyle: btnStyle.default,
    type: 'button',
    text: 'Button',
  };

  render() {
    return (
      <Button
        {...this.props}
        btnStyle={this.props.btnStyle}
        type={this.props.type}
      >
        {this.props.text}
      </Button>
    );
  }
}
