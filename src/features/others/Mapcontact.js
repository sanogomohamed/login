import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker, 
  InfoWindow,
} from "react-google-maps";
const { compose, withProps, withStateHandlers } = require("recompose");
const FaAnchor = require("react-icons/lib/fa/anchor")

export class Mapcontact extends Component {


  
  static propTypes = {
    others: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  
  render() {
    const MapWithAMakredInfoWindow = compose(
      withStateHandlers(() => ({
        isOpen: false,
      }), {
        onToggleOpen: ({ isOpen }) => () => ({
          isOpen: !isOpen,
        })
      }),
      withScriptjs,
      withGoogleMap
    )(props =>
      <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 44.855144, lng:  -0.566306 }}
        
      >
        <Marker
          position={{ lat: 44.855144, lng:  -0.566306 }}
          onClick={props.onToggleOpen}
        >
          {props.isOpen && <InfoWindow onCloseClick={props.onToggleOpen}>
            <div>
             <h2> Bodeaux YNOV CAMPUS </h2>
             <small>89 quai des Chartrons, 33300 Bordeaux</small>
            </div>
            
          </InfoWindow>}
        </Marker>
      </GoogleMap>
    );
    
    return (
      <div className="others-mapcontact">
        <MapWithAMakredInfoWindow
          googleMapURL="https://maps.googleapis.com/maps/api/js?key=AIzaSyCFhgWL9Wow74HxnuCQHeNaYbTS-c5qGys&v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />  
      </div>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    others: state.others,
  };
}

/* istanbul ignore next */
function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ ...actions }, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Mapcontact);
