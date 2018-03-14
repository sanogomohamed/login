import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import nock from 'nock';
import { expect } from 'chai';

import {
  AUTHENTIFICATION_LOGIN_ACTION_BEGIN,
  AUTHENTIFICATION_LOGIN_ACTION_SUCCESS,
  AUTHENTIFICATION_LOGIN_ACTION_FAILURE,
  AUTHENTIFICATION_LOGIN_ACTION_DISMISS_ERROR,
} from 'src/features/authentification/redux/constants';

import {
  loginAction,
  dismissLoginActionError,
  reducer,
} from 'src/features/authentification/redux/loginAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('authentification/redux/loginAction', () => {
  afterEach(() => {
    nock.cleanAll();
  });

  it('dispatches success action when loginAction succeeds', () => {
    const store = mockStore({});

    return store.dispatch(loginAction())
      .then(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', AUTHENTIFICATION_LOGIN_ACTION_BEGIN);
        expect(actions[1]).to.have.property('type', AUTHENTIFICATION_LOGIN_ACTION_SUCCESS);
      });
  });

  it('dispatches failure action when loginAction fails', () => {
    const store = mockStore({});

    return store.dispatch(loginAction({ error: true }))
      .catch(() => {
        const actions = store.getActions();
        expect(actions[0]).to.have.property('type', AUTHENTIFICATION_LOGIN_ACTION_BEGIN);
        expect(actions[1]).to.have.property('type', AUTHENTIFICATION_LOGIN_ACTION_FAILURE);
        expect(actions[1]).to.have.nested.property('data.error').that.exist;
      });
  });

  it('returns correct action by dismissLoginActionError', () => {
    const expectedAction = {
      type: AUTHENTIFICATION_LOGIN_ACTION_DISMISS_ERROR,
    };
    expect(dismissLoginActionError()).to.deep.equal(expectedAction);
  });

  it('handles action type AUTHENTIFICATION_LOGIN_ACTION_BEGIN correctly', () => {
    const prevState = { loginActionPending: false };
    const state = reducer(
      prevState,
      { type: AUTHENTIFICATION_LOGIN_ACTION_BEGIN }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.loginActionPending).to.be.true;
  });

  it('handles action type AUTHENTIFICATION_LOGIN_ACTION_SUCCESS correctly', () => {
    const prevState = { loginActionPending: true };
    const state = reducer(
      prevState,
      { type: AUTHENTIFICATION_LOGIN_ACTION_SUCCESS, data: {} }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.loginActionPending).to.be.false;
  });

  it('handles action type AUTHENTIFICATION_LOGIN_ACTION_FAILURE correctly', () => {
    const prevState = { loginActionPending: true };
    const state = reducer(
      prevState,
      { type: AUTHENTIFICATION_LOGIN_ACTION_FAILURE, data: { error: new Error('some error') } }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.loginActionPending).to.be.false;
    expect(state.loginActionError).to.exist;
  });

  it('handles action type AUTHENTIFICATION_LOGIN_ACTION_DISMISS_ERROR correctly', () => {
    const prevState = { loginActionError: new Error('some error') };
    const state = reducer(
      prevState,
      { type: AUTHENTIFICATION_LOGIN_ACTION_DISMISS_ERROR }
    );
    expect(state).to.not.equal(prevState); // should be immutable
    expect(state.loginActionError).to.be.null;
  });
});
