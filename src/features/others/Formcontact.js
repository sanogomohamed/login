import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';

import { Form, Icon, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

export class Formcontact extends Component {

  constructor(props) {
    super(props);
    this.state = {};
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
   
     //this.props.actions.loginAction(email,password)
    // console.log(this.state)
     
   
  }
 //static propTypes = {
 //  others: PropTypes.object.isRequired,
 //  actions: PropTypes.object.isRequired,
 //};

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form onSubmit={this.handleSubmit} className="contact-form">

        <FormItem label="Nom" className="name-form">
          {getFieldDecorator('nom', {
            rules: [{ required: true, message: 'Entrez votre nom s\'il vous plait!' }],
          })(
            <Input /*prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}*/ placeholder="nom" /* onChange ={this.handleInputChange}*/ />
          )}
        </FormItem>

        <FormItem  label="PRÉNOM">
          {getFieldDecorator('prenom', {
            rules: [{ required: true, message: 'Entrez votre prénom s\'il vous plait!' }],
          })(
            <Input /*prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}*/ placeholder="prénom" /* onChange ={this.handleInputChange}*/ />
          )}
        </FormItem>

        <FormItem  label="E-MAIL">
          {getFieldDecorator('email', {
            rules: [{ required: true, message: 'Entrez votre email s\'il vous plait!' }],
          })(
            <Input /* prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}*/ type="email"  placeholder="email" name ="email" /* onChange ={this.handleInputChange}*/ />
          )}
        </FormItem>

        <FormItem  label="OBJET">
          {getFieldDecorator('objet', {
            rules: [{ required: true, message: 'Entrez votre l\'objet de votre message s\'il vous plait!' }],
          })(
            <Input /*prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}*/  placeholder="objet"  /* onChange ={this.handleInputChange}*/ />
          )}
        </FormItem>

        <FormItem  label="MESSAGE">
          {getFieldDecorator('userName', {
            rules: [{ required: true, message: 'Entrez votre message s\'il vous plait!' }],
          })(
            <Input.TextArea /*prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}*/ rows="10" placeholder="message" /* onChange ={this.handleInputChange}*/ />
          )}
        </FormItem>

        <FormItem>
          <Button type="primary" htmlType="submit" className="contact-form-button" >
            ENVOYER
          </Button>
       
        </FormItem>
      </Form>
    );
  }
}

const  WrappedNormalFormcontact = Form.create()(Formcontact);

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
)(WrappedNormalFormcontact);
