import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';
import { Field } from 'redux-form';
import { SpanError } from '../../modules/riskForm/stylesheet/riskFormStyle';

import { FieldWrapper, InputWrapper } from './stylesheet/inputStyle';

const CheckBoxError = styled(SpanError)`
  text-align: left;
`;

const INPUT_TEXT = 'text';
const INPUT_EMAIL = 'email';
const INPUT_NUMBER = 'number';
const INPUT_PASSWORD = 'password';
const TEXT_AREA = 'textarea';
const SELECT_BOX = 'select';
const CHECK_BOX = 'checkbox';

export default class InputField extends Component {
  static propTypes = {
    htmlFor: PropTypes.string,
    setLocation: PropTypes.func.isRequired,
  };

  static defaultProps = {
    htmlFor: '',
  };

  renderInputText = (field) => {
    const {
      input, label, type,
      icon,
      switchVisibleGMap,
      meta: { touched, error, warning },
    } = field;
    const { htmlFor } = this.props;

    return (
      <FieldWrapper>
        <label htmlFor={htmlFor}>{label}</label>
        <InputWrapper>
          {icon ? <FontAwesome tag="i" name={icon} onClick={switchVisibleGMap} /> : null}
          {switchVisibleGMap ?
            <input type={type} {...input} placeholder={label} onChange={this.props.setLocation} /> :
            <input type={type} {...input} placeholder={label} />
          }
          {touched && (error && <SpanError>{error}</SpanError>)}
        </InputWrapper>
      </FieldWrapper>
    );
  }

  renderSelect = (field) => {
    const {
      input, label, options,
      meta: { touched, error, warning },
    } = field;
    const { htmlFor } = this.props;

    return (
      <FieldWrapper>
        <label htmlFor={htmlFor}>{label}</label>
        <InputWrapper>
          <select {...input}>
            {
              options.map((item, index) => (
                <option key={index} value={item.value}>{item.text}</option>
                ))
            }
          </select>
          {touched && (error && <SpanError>{error}</SpanError>)}
        </InputWrapper>
      </FieldWrapper>
    );
  }

  renderTextarea = (field) => {
    const {
      input, label, rows,
      meta: { touched, error, warning },
    } = field;
    const { htmlFor } = this.props;

    return (
      <FieldWrapper>
        <label htmlFor={htmlFor}>{label}</label>
        <InputWrapper>
          <textarea {...input} rows={rows} placeholder={label} />
          {touched && (error && <SpanError>{error}</SpanError>)}
        </InputWrapper>
      </FieldWrapper>
    );
  }

  renderCheckBox = (field) => {
    const {
      input, label, type,
      meta: { touched, error, warning },
    } = field;
    const { htmlFor } = this.props;

    return (
      <label htmlFor={htmlFor}>
        <input type={type} {...input} placeholder={label} />
        I accept the privacy policy
        {touched && (error && <CheckBoxError>{error}</CheckBoxError>)}
      </label>
    );
  }

  renderInnerComponent = (field) => {
    const { type } = field;

    switch (type) {
      case INPUT_TEXT:
      case INPUT_EMAIL:
      case INPUT_NUMBER:
      case INPUT_PASSWORD:
        return this.renderInputText(field);
      case TEXT_AREA:
        return this.renderTextarea(field);
      case SELECT_BOX:
        return this.renderSelect(field);
      case CHECK_BOX:
        return this.renderCheckBox(field);
      default:
        return null;
    }
  }

  render() {
    return (
      <Field
        {...this.props}
        component={this.renderInnerComponent}
      />
    );
  }
}

// <input {...this.props.input} placeholder={this.props.placeholder} />
