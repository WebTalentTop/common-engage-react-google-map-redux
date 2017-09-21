import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Polygon, Marker } from 'react-google-maps';

const GettingStartedGoogleMap = withGoogleMap(props => (
  <GoogleMap
    defaultZoom={props.marker.defaultZoom}
    defaultCenter={props.marker.position}
  >
    <Polygon
      center={props.marker.position}
      paths={props.polygonPaths}
      options={props.polygonOptions}
      onClick={props.onMapClick}
    />
    <Marker
      {...props.marker}
    />
  </GoogleMap>
));

export default class GMapPicker extends Component {
  static propTypes = {
    markerChange: PropTypes.func.isRequired,
    markerInfo: PropTypes.shape({
      position: PropTypes.shape({
        lat: PropTypes.number.isRequired,
        lng: PropTypes.number.isRequired,
      }).isRequired,
      defaultAnimation: PropTypes.number.isRequired,
      defaultZoom: PropTypes.number.isRequired,
      key: PropTypes.number.isRequired,
    }).isRequired,
    polygonOptions: PropTypes.shape({
      fillColor: PropTypes.string,
      fillOpacity: PropTypes.number,
      strokeColor: PropTypes.string,
      strokeOpacity: PropTypes.number,
      strokeWeight: PropTypes.number,
    }).isRequired,
    polygonPaths: PropTypes.arrayOf(
      PropTypes.shape({
        lat: PropTypes.number,
        lng: PropTypes.number,
      })
    ).isRequired,
  };
  handleMapClick= (event) => {
    const newLocation = this.props.markerInfo;
    newLocation.position = {};
    newLocation.position.lat = event.latLng.lat();
    newLocation.position.lng = event.latLng.lng();
    this.props.markerChange(newLocation);
  }
  render() {
    return (
      <div style={{ height: '100%' }} >
        <GettingStartedGoogleMap
          containerElement={
            <div style={{ height: '100%' }} />
          }
          mapElement={
            <div style={{ height: '100%' }} />
          }
          onMapClick={this.handleMapClick}
          marker={this.props.markerInfo}
          polygonOptions={this.props.polygonOptions}
          polygonPaths={this.props.polygonPaths}
        />
      </div>
    );
  }
}
