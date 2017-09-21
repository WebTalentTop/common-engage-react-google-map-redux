import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: stretch;
  justify-content: space-around;
  width: 100%;
  @media (max-width: 768px), only screen and (max-device-width: 768px) {
    width: 100%;
  }
`;

export const WrapContainer = styled.div`
  background-color: #FFF;
  padding: 3em;
  max-width: 1200px;
  margin: 0 auto;
  hr {
    border-top: 1px solid rgba(200,200,200,.7);
    margin-top: 3em;
    margin-bottom: 1.5em;
    margin-left: 0;
    margin-right: 0;
  }
  @media (max-width: 768px), only screen and (max-device-width: 768px){
    padding: 1em;
  }
`;

export const HalfCol = styled.div`
  width: 50%;
  align-items: flex-start;
  justify-content: space-between;
  position: relative;
  @media (max-width: 768px), only screen and (max-device-width: 768px) {
    width: 100%;
  }
  &:last-child {
    padding-left: 1em;
    @media (max-width: 768px), only screen and (max-device-width: 768px) {
      padding-left: 0;
    }
  }
`;

export const FieldContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
  li {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0,
  }
`;

export const H2 = styled.h2`
  font-weight: 300;
  letter-spacing: .02em;
  font-family: Open Sans, Calibri, Arial, sans-serif;
  margin-left: 2%;
  margin-top: 0.5em;
  margin-bottom: 1.2em;
  @media (max-width: 768px), only screen and (max-device-width: 768px) {
    margin-left: 0;
  }
`;

export const FormFooter = styled.div`
  display: flex;
  align-items: center;
  title{
    font-size: 13px;
    font-weight: 300;
  }
  label {
    font-size: 14;
    letter-spacing: .04em;
    font-weight: 300;
    margin-left: 5px;
    flex: 1;
  }
  input[type=checkbox] {
    margin-right: 10px;
  }
  @media (max-width: 768px), only screen and (max-device-width: 768px) {
    flex-direction: column;
  }
`;

export const GroupButton = styled.div`
  @media (max-width: 768px), only screen and (max-device-width: 768px) {
    margin-top: 10px;
  }
`;

export const GmapContainer = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% - 7px);
  @media (max-width: 768px), only screen and (max-device-width: 768px){
    height: 100%;
  }
  z-index: 1;
  ${props => (props.show ? 'opacity: 1; transition: opacity 0.5s;' : 'opacity: 0; transition: opacity 0.5s; pointer-events: none')}
`;

export const SpanError = styled.span`
  text-align: right;
  padding-top: 5px;
  color: red;
  display: block;
`;
