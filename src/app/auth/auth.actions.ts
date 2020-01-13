import { createAction, props } from '@ngrx/store';

export const register = createAction(
  '[Register Component] Register',
);

export const login = createAction(
  '[Log In] Log in',
  props<{ email: string, password: string }>()
);

export const logout = createAction(
  '[Log Out] Log Out'
);