import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleNav from '../common/SimpleNav';
import routeConfig from '../../common/routeConfig';
import { LocaleProvider, DatePicker } from 'antd';
import frFR from 'antd/lib/locale-provider/fr_FR';

/*
  This is the root component of your app. Here you define the overall layout
  and the container of the react router. The default one is a two columns layout.
  You should adjust it according to the requirement of your app.
*/
export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  };

  static defaultProps = {
    children: 'No content.',
  };

  render() {
    return (
      <LocaleProvider>
        <div className="home-app">
          <div className="sidebar">
            <SimpleNav routes={routeConfig} />
          </div>
          <div className="page-container">
            {this.props.children}
          </div>
        </div>
      </LocaleProvider>
    );
  }
}
