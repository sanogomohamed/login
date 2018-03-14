import {
  AUTHENTIFICATION_LOGIN_ACTION_BEGIN,
  AUTHENTIFICATION_LOGIN_ACTION_SUCCESS,
  AUTHENTIFICATION_LOGIN_ACTION_FAILURE,
  AUTHENTIFICATION_LOGIN_ACTION_DISMISS_ERROR,
} from './constants';
import { Auth } from '../../../helper/api';

// loginAction
export const loginAction = function loginAction(login,password) {
  return (dispatch) => { 
    dispatch({
      type: AUTHENTIFICATION_LOGIN_ACTION_BEGIN,
    });
    console.log(login);
    Auth.user(login, password).then(
      (res) => {
        dispatch({
          type:  AUTHENTIFICATION_LOGIN_ACTION_SUCCESS,
          data: res,
        });
      
        console.log(res);
      },
     //reject(err);
      (err) => {
        dispatch({
          type: AUTHENTIFICATION_LOGIN_ACTION_FAILURE,
          data: { error: err },
        });
        
        console.log("LOGIN FAILLED: ", err);
      },
    );
  }
}

// Async action saves request error by default, this method is used to dismiss the error info.
// If you don't want errors to be saved in Redux store, just ignore this method.
export function dismissLoginActionError() {
  return {
    type: AUTHENTIFICATION_LOGIN_ACTION_DISMISS_ERROR,
  };
}

export function reducer(state, action) {
  switch (action.type) {
    case AUTHENTIFICATION_LOGIN_ACTION_BEGIN:
      // Just after a request is sent
      return {
        ...state,
        loginActionPending: true,
        loginActionError: null,
      };

    case AUTHENTIFICATION_LOGIN_ACTION_SUCCESS:
      // The request is success
      return {
        ...state,
        loginActionPending: false,
        loginActionError: null,
      };

    case AUTHENTIFICATION_LOGIN_ACTION_FAILURE:
      // The request is failed
      return {
        ...state,
        loginActionPending: false,
        loginActionError: action.data.error,
      };

    case AUTHENTIFICATION_LOGIN_ACTION_DISMISS_ERROR:
      // Dismiss the request failure error
      return {
        ...state,
        loginActionError: null,
      };

    default:
      return state;
  }
}
