import {takeLatest, takeEvery, all, put} from 'redux-saga/effects';

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export function* incrementAsync() {
  yield delay(1000);

  yield put({type: 'INCREMENT'});
}

export function* watchCounter() {
  yield takeLatest('INCREMENT_ASYNC', incrementAsync);
}

export function* addNumberAsync() {
  yield delay(1000);

  yield put({type: 'ADD_RANDOM_NUMBER'});
}

export function* watchNumbers() {
  yield takeEvery('ADD_RANDOM_NUMBER_ASYNC', addNumberAsync);
}

export function* rootSaga() {
  yield all([watchCounter(), watchNumbers()]);
}
