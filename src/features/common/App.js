import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './redux/actions';
import { LocaleProvider } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';
import {Home} from '../home';
import Layout from './Layout';

export class App extends Component {
  static propTypes = {
    common: PropTypes.object.isRequired,
    actions: PropTypes.object.isRequired,
  };

  render() {

    return (
      <LocaleProvider>
        {
          this.props.location.pathname === '/' ?
            <Home {...this.props}/>
          :
            <Layout {...this.props}/>
        }
      </LocaleProvider>
    );
  }
}

/* istanbul ignore next */
function mapStateToProps(state) {
  return {
    common: state.common,
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
)(App);
