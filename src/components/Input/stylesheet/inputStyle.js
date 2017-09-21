/**
 * Created by haunguyen on 5/22/17.
 */
import styled from 'styled-components';

const FieldWrapper = styled.li`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  margin-bottom: 20px;

  label {
    font-size: 14px;
    font-weight: 300;
    letter-spacing: .04em;
    flex: 1 0 120px;
    max-width: 220;
    padding-bottom: 8px;
  }
`;

const InputWrapper = styled.div`
  width: 100%;
  position: relative;
  flex: 1 0 220px;
  
  i {
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
    position: absolute;
    font-size: 18px;
    top: 9px;
    right: 11px;
  }

  input,
  select,
  textarea {
    width: 100%;
    font-size: 14px;
    padding-top: 8px;
    padding-bottom: 8px;
    padding-right: 8px;
    padding-left: 14px;
    border: 1px solid rgba(200,200,200,.7);
    border-radius: 3px;
  }

  select {
    height: 39px;
    padding-left: 14px;
    border-radius: 3px;
    -webkit-appearance: none;
    -moz-appearance: none;
    color: rgba(0,0,0,.6);
    background: transparent url("../images/br_down.png") no-repeat calc(100% - 10px) center;
    background-size: 12px 12px;
  }

  input[type='checkbox'] {
    margin-right: 10px,
  }

  textarea {
    resize: vertical;
  }
`;

export { InputWrapper, FieldWrapper };
