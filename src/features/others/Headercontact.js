import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Row, Col } from 'antd';

export class Headercontact extends Component {
 // static propTypes = {
 //   others: PropTypes.object.isRequired,
 //   actions: PropTypes.object.isRequired,
 // };

  render() {
    return (
      <div className="others-headercontact">

      {/* Header box */}
       <Row>
          <Col span={12}><strong className="logo-ynov">LOGO YNOV</strong></Col>
          <Col span={12} >
            <Row type="flex" justify="end">
              <button className="mon-compte">MON COMPTE</button>
            </Row>
          </Col>
        </Row>
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
)(Headercontact);
