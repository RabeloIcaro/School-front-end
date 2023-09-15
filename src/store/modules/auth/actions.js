import * as types from '../types';

export function loginRequest(payload) {
  return {
    type: types.LOGIN_REQUEST,
    payload,
  };
}

export function loginSuccess(payload) {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
}

export function loginFailure(payload) {
  return {
    type: types.LOGIN_FAILURE,
    payload,
  };
}

export function registerRequest(payload) {
  return {
    type: types.REGISTER_REQUEST,
    payload,
  };
}

export function registerFailure(payload) {
  return {
    type: types.REGISTER_FAILURE,
    payload,
  };
}

export function registerUpdatedSuccess(payload) {
  return {
    type: types.REGISTER_UPDATED_SUCCESS,
    payload,
  };
}

export function registerCreatedSuccess(payload) {
  return {
    type: types.REGISTER_CREATED_SUCCESS,
    payload,
  };
}

export function passwordRestoreRequest(payload) {
  return {
    type: types.PASSWORD_RESTORE_REQUEST,
    payload,
  };
}
export function passwordRestoreSuccess(payload) {
  return {
    type: types.PASSWORD_RESTORE_SUCCESS,
    payload,
  };
}

export function passwordRestoreFailure(payload) {
  return {
    type: types.PASSWORD_RESTORE_FAILURE,
    payload,
  };
}
export function passwordResetRequest(payload) {
  return {
    type: types.PASSWORD_RESET_REQUEST,
    payload,
  };
}
export function passwordResetSuccess(payload) {
  return {
    type: types.PASSWORD_RESET_SUCCESS,
    payload,
  };
}

export function passwordResetFailure(payload) {
  return {
    type: types.PASSWORD_RESET_FAILURE,
    payload,
  };
}
