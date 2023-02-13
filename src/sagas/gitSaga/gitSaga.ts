import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import types from '../../actions/git-actions/types';
import { getAllUsersSuccess, getUserFailure, getUserSuccess } from '../../slices/gitSlice';
import api from './../../api/api';

function* getAllUsers(action: PayloadAction<string | any>): Generator<any> {
  try {
    
    const users = yield call(() => api.get('/'))

    yield put(getAllUsersSuccess(users))
  } catch (e) {
    yield put(getUserFailure())
  }
}

function* getUser(action: PayloadAction<string | any>): Generator<any> {
  try {

    const path = '/users'
    const name = action.payload.name
    const user = yield call(() => api.get(`${path}/${name}`))

    yield put(getUserSuccess(user))
  } catch (e) {
    yield put(getUserFailure())
  }
}

function* rootSaga() {
  yield takeEvery(types.GET_ALL_USERS_REQUESTED, getAllUsers)
  yield takeEvery(types.GET_USER_REQUESTED, getUser)
}

export default rootSaga;