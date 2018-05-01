import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Headercontact } from './Headercontact' 
import  WrappedNormalFormcontact  from './Formcontact' 
import { Row, Col } from 'antd';
import  Mapcontact  from './Mapcontact' 
import { Footer } from './Footer' 



export class Contact extends Component {
 // static propTypes = {
 //   others: PropTypes.object.isRequired,
 //   actions: PropTypes.object.isRequired,
 // };

  render() {
    return (
      <Row className="others-contact">

        {/* Header Component */}
        <Row className="head-contact">
          <Headercontact/>
        </Row>
        <Row className="row-title" >
          <Col span={"lg"} className="contact-title">
            <h2>CONTACT</h2>
          </Col>  
        </Row>

        {/* Form Component */}
        <Row className="content-contact">
          <Col span={10}>
            <WrappedNormalFormcontact/>
          </Col>
          <Col span={12} offset={2} >
            <div>
              <h4 className="contact-title">CAMPUS YNOV </h4>
              <small className="address-contact">
                89 quai des Chartrons<br/>
                33300 Bordeaux<br/>
                <b>Horaire</b> du Lundi au<br/>
                  Vendredi 8h-18h
                </small>
            </div>

            {/* Map Component */}
            <Mapcontact />
          </Col>
          
        {/* Footer Component */}
        </Row>
        <Row className="head-contact">
          <Footer/>
        </Row>
        
      </Row>
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
)(Contact);
