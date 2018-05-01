import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Row, Col, Input, Button, Form } from 'antd';
import { Icon } from 'react-icons-kit'
import {instagram,facebook,twitter} from 'react-icons-kit/icomoon/'
const FormItem = Form.Item;

export class Footer extends Component {
  static propTypes = {
    others: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    return (
      <Row className="others-footer"> 
        <Row className="sub-footer">

            {/* Block subscribe */}
            <Col span={14} className="subscribe-box" >
              <Row className="subscribe-text">
                <Col span={14} >
                  <b>Subsribe</b><br/>
                    <span >Excepteut sint occaecat cupidatat non proid, sunt in culpa qqui oiccc </span>
                </Col>
              </Row >
              <Form layout="inline">
                <FormItem >
                  <Input size="large" placeholder="Email Address" />
                </FormItem>
                <FormItem>
                  <Button type="secondary" size={"large"}>S'INSCRIRE</Button>
                </FormItem>
              </Form>

          </Col>

          {/* CONTACT US */}
          <Col span={6} offset={4}  className="infos">
            <Col span={12}  >
              <ul>
                <li><small><b>CONTACT US</b></small></li>
                <li><small><b>ORDERING & PAYMENT</b></small></li>
                <li><small><b>SIPPING</b></small></li>
              </ul>
            </Col>
            <Col span={12} style={{ textAlign: "end" }} >
              <ul>
                <li><small><b>INFORMATIONS</b></small></li>
                <li><small><b>WORK WITH US</b></small></li>
                <li><small><b>PRIVACY POLICY</b></small></li>
              </ul>
            </Col>
          </Col>
        </Row>

          {/* Copyreight and social icon */}
          <Row className="uder-footer">
            <Col span={8}  >
              <small>© YNOV CAMPUS</small>
            </Col  >
            <Col span={3} offset={13} style={{ textAlign: "end" }} > 
             <div className="footer-icon">
              <Icon size={14} style={{ padding: "0px 20px 0px 10px" }} icon={instagram}/>
              <Icon size={14} style={{ padding: "0px 20px 0px 0px" }} icon={facebook}/>
              <Icon size={14} icon={twitter}/>
              </div>
            </Col>
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
)(Footer);
