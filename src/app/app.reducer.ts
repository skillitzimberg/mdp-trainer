import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromAuth from './auth/auth.reducer';


export interface State {
  auth: fromAuth.State;
}

export const reducers: ActionReducerMap<State> = {
  auth: fromAuth.reducer,
};

export const selectAuthState = createFeatureSelector<State, fromAuth.State>('auth');


export const selectAuthIsAuthorized = createSelector(
  selectAuthState,
  (state: fromAuth.State) => state.isAuthorized
);