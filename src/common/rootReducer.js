import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import commonReducer from '../features/common/redux/reducer';
import authentificationReducer from '../features/authentification/redux/reducer';
import bookingReducer from '../features/booking/redux/reducer';
import eventReducer from '../features/event/redux/reducer';
import userReducer from '../features/user/redux/reducer';
import homeReducer from '../features/home/redux/reducer';
import othersReducer from '../features/others/redux/reducer';
import categoryReducer from '../features/category/redux/reducer';

// NOTE 1: DO NOT CHANGE the 'reducerMap' name and the declaration pattern.
// This is used for Rekit cmds to register new features, remove features, etc.
// NOTE 2: always use the camel case of the feature folder name as the store branch name
// So that it's easy for others to understand it and Rekit could manage theme.

const reducerMap = {
  router: routerReducer,
  common: commonReducer,
  authentification: authentificationReducer,
  booking: bookingReducer,
  event: eventReducer,
  user: userReducer,
  home: homeReducer,
  others: othersReducer,
  category: categoryReducer,
};

export default combineReducers(reducerMap);
