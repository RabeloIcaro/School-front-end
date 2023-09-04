import { call, put, all, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import * as actions from './actions';
import * as types from '../types';

const requisicao = () =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 600);
  });

function* exampleRequest() {
  try {
    yield call(requisicao);
    yield put(actions.buttonClickSuccess());
  } catch {
    toast.error('Deu erro');
    yield put(actions.buttonClickFailure());
  }
}

export default all([takeLatest(types.CLICKED_BUTTON_REQUEST, exampleRequest)]);
