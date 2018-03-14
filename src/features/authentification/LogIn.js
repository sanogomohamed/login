import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

export class NormalLoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      authentification: false,
      email: "",
      password: "",
    };
    console.log(this.props)
  }

  handleInputChange=(e)=> {
    e.preventDefault();
    const target = e.target;
    const name = target.name;
    this.props.authentification.email
    this.setState({[name]: e.target.value});
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    const email = this.state.email
    const password = this.state.password
    const authentification = this.state.authentification
    
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
      }
    }); 
   
     this.props.actions.loginAction(email,password)
     console.log(this.state)
     
   
  }

  static propTypes = {
    authentification: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="login-form">
        <FormItem>
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Please input your username!' }],
          })(
            <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" name ="email" onChange ={this.handleInputChange} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: 'Please input your Password!' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" name ="password" onChange ={this.handleInputChange} />
          )}
        </FormItem>
        <FormItem>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>Remember me</Checkbox>
          )}
          <a className="login-form-forgot" href="">Forgot password</a>
          <Button type="primary" htmlType="submit" className="login-form-button" >
            Log in
          </Button>
          Or <a href="">register now!</a>
        </FormItem>
      </Form>
    );
  }
}
const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    authentification: state.authentification,
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
)(WrappedNormalLoginForm);
