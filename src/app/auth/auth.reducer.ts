import { Action, createReducer, on } from '@ngrx/store';
import * as authActions from './auth.actions';

export interface State {
  isAuthorized: boolean;
}

export const initialState = {
  isAuthorized: false,
}

const _authReducer = createReducer(
  initialState,
  on(authActions.register, state => ({ ...state, isAuthorized: state.isAuthorized = true})),
  on(authActions.login, state => ({ ...state, isAuthorized: state.isAuthorized = true})),
  on(authActions.logout, state =>({ ...state, isAuthorized: state.isAuthorized = false}))
);

export function reducer(state: State | undefined, action: Action) {
  return _authReducer(state, action);
}

