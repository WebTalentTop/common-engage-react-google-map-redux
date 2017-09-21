import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { reduxForm } from 'redux-form';
import { GMapPicker, Button, InputField } from '../../../components/index';
import PhotosCarousel from '../components/PhotosCarousel';
import {
  FormContainer,
  WrapContainer,
  HalfCol,
  FieldContainer,
  H2,
  FormFooter,
  GroupButton,
  GmapContainer,
} from '../stylesheet/riskFormStyle';

// TODO should implement the date-picker package, I'm thinking about the react-dates (airbnb)
// TODO Waiting for confirmation from Gilles.

// The validation below is just for testing
// TODO should create a correct validation based on the requirement of Risk Form
const validateRequired = {
  required: value => (value ? null : 'Required'),
  number: value => (value && isNaN(Number(value)) ? 'Must be a number' : null),
  email: value => (value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
    'Invalid email address' : null),
};

class RiskForm extends Component {
  static propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    change: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    // Temporary use state for showing the Map for GMapPiker
    // TODO need to make sure how it works then implement it in the correct way.
    this.state = {
      showGMap: false,
      markerInfo: {
        position: { lat: -19, lng: 133 },
        defaultAnimation: 2,
        defaultZoom: 3,
        key: Date.now(),
      },
      polygonPaths: [
        { lat: -23.44, lng: 152.52 },
        { lat: -23.44, lng: 112.88 },
        { lat: -21.18, lng: 112.88 },
        { lat: -9.06, lng: 131.64 },
        { lat: -9.73, lng: 145.64 },
      ],
      polygonOptions: {
        fillColor: 'green',
        fillOpacity: 0.1,
        strokeColor: 'green',
        strokeOpacity: 1,
        strokeWeight: 1,
      }
    };
  }

  setLatLng = (e) => {
    const val = e.target.value;
    const pos = val.split(',');
    const curLat = parseFloat(pos[0]);
    const curLng = parseFloat(pos[1]);
    const newLocation = this.state.markerInfo;
    newLocation.position = {};
    newLocation.position.lat = curLat;
    newLocation.position.lng = curLng;
    this.setState({ markerInfo: newLocation });
    const inputLocation = `${curLat}, ${curLng}`;
    this.props.change('location', inputLocation);
  }

  handleMarkerChange = (value) => {
    const latVal = value.position.lat.toFixed(5);
    const lngVal = value.position.lng.toFixed(5);
    const newLocation = `${latVal}, ${lngVal}`;
    this.setState({ markerInfo: value });
    // TODO temporary render text of long & lat in the input location.
    // TODO Need to store it in redux store
    this.props.change('location', newLocation);
  }

  switchVisibleGMap = () => {
    this.setState({ showGMap: !this.state.showGMap });
  }

  submitRiskForm = values => (values);

  render() {
    const { handleSubmit } = this.props;

    return (
      <WrapContainer>
        <form onSubmit={handleSubmit(this.submitRiskForm)}>
          <H2> Report a Risk </H2>
          <FormContainer>
            <HalfCol>
              <FieldContainer>
                <InputField
                  name="observationDate"
                  type="text"
                  label="Observation Date"
                  icon="calendar"
                  validate={validateRequired.required}
                />

                <InputField
                  name="reportDate"
                  type="text"
                  label="Report Date"
                  icon="calendar"
                  validate={validateRequired.required}
                />

                <InputField
                  name="contactName"
                  type="text"
                  label="Contact Name"
                  validate={validateRequired.required}
                />

                <InputField
                  name="contactEmail"
                  type="text"
                  label="Contact Email"
                  validate={[validateRequired.required, validateRequired.email]}
                />

                <InputField
                  name="contactPhone"
                  type="text"
                  label="Contact Phone"
                  validate={[validateRequired.required, validateRequired.number]}
                />

                <InputField
                  name="location"
                  type="text"
                  label="Location"
                  icon="map-marker"
                  validate={validateRequired.required}
                  setLocation={this.setLatLng}
                  switchVisibleGMap={this.switchVisibleGMap}
                />

                <InputField
                  name="publishReport"
                  type="select"
                  label="Publish Report"
                  options={[
                    { value: 'yes', text: 'Yes' },
                    { value: 'no', text: 'No' },
                  ]} // For test
                />

                <InputField
                  name="notes"
                  type="textarea"
                  label="Notes"
                  rows="6"
                  validate={validateRequired.required}
                />

              </FieldContainer>
            </HalfCol>
            <HalfCol>
              <GmapContainer show={this.state.showGMap}>
                <GMapPicker
                  markerChange={this.handleMarkerChange}
                  markerInfo={this.state.markerInfo}
                  polygonOptions={this.state.polygonOptions}
                  polygonPaths={this.state.polygonPaths}
                />
              </GmapContainer>
              <PhotosCarousel />
            </HalfCol>
          </FormContainer>
          <hr />
          <FormFooter>
            <InputField
              name="privacyPolicy"
              type="checkbox"
              validate={validateRequired.required}
            />
            <GroupButton>
              <Button btnStyle="default" type="button" text="Cancel" />
              <Button btnStyle="primary" type="submit" text="Submit Report" />
            </GroupButton>
          </FormFooter>
        </form>
      </WrapContainer>
    );
  }
}

export default reduxForm({
  form: 'RiskForm', // a unique identifier for this form
})(RiskForm);
