import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import { get } from 'lodash';
import * as actions from './actions';
import * as types from '../types';
import axios from '../../../services/axios';
import history from '../../../services/history';

function* loginRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/tokens', payload);
    yield put(actions.loginSuccess({ ...response.data }));

    toast.success('Your are logged in');

    axios.defaults.headers.Authorization = `Bearer ${response.data.token}`;
    history.push(payload.prevPath);
  } catch (e) {
    toast.error('Invalid user and/or password');

    yield put(actions.loginFailure());
  }
}

function* passwordRestoreRequest({ payload }) {
  try {
    const response = yield call(axios.post, '/passwordRecover', payload);
    yield put(actions.passwordRestoreSuccess({ ...response.data }));

    toast.success('A code will be sent to your e-mail');

    history.push('/passwordRecovery/code');
  } catch (e) {
    console.log(e);
    toast.error('Invalid user and/or password');

    yield put(actions.passwordRestoreFailure());
  }
}

function* passwordResetRequest({ payload }) {
  try {
    const response = yield call(axios.patch, '/passwordRecover/code', payload);
    yield put(actions.passwordResetSuccess({ ...response.data }));

    toast.success('Your password has been updated');

    history.push('/login');
  } catch (e) {
    console.log(e);
    toast.error('Invalid e-mail and/or code');

    yield put(actions.passwordResetFailure());
  }
}

function persistRehydrate({ payload }) {
  const token = get(payload, 'auth.token', '');
  if (!token) return;
  axios.defaults.headers.Authorization = `Bearer ${token}`;
}

// eslint-disable-next-line consistent-return
function* registerRequest({ payload }) {
  const { id, nome, email, password } = payload;

  try {
    if (id) {
      yield call(axios.put, '/users', {
        email,
        nome,
        password: password || undefined,
      });
      toast.success('Your account has been updated');
      yield put(actions.registerUpdatedSuccess({ nome, email, password }));
    } else {
      yield call(axios.post, '/users', {
        email,
        nome,
        password,
      });
      toast.success('Your account has been created');
      yield put(actions.registerCreatedSuccess({ nome, email, password }));
      history.push('/login');
    }
  } catch (e) {
    const errors = get(e, 'response.data.error', []);
    const status = get(e, 'response.status', 0);

    if (status === 401) {
      toast.error('Please, make a new login');
      yield put(actions.loginFailure());
      return history.push('/login');
    }

    if (errors.length > 0) {
      errors.map((error) => toast.error(e));
    } else {
      toast.error('Unknown error');
      console.log(e);
    }

    yield put(actions.registerFailure());
  }
}

export default all([
  takeLatest(types.LOGIN_REQUEST, loginRequest),
  takeLatest(types.PERSIST_REHYDRATE, persistRehydrate),
  takeLatest(types.REGISTER_REQUEST, registerRequest),
  takeLatest(types.PASSWORD_RESTORE_REQUEST, passwordRestoreRequest),
  takeLatest(types.PASSWORD_RESET_REQUEST, passwordResetRequest),
]);
