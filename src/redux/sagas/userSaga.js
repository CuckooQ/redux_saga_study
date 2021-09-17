import { put, call, takeEvery } from "redux-saga/effects";
import {
  GET_USERS_START,
  getUsersSuccess,
  getUsersFail,
} from "../modules/user";
import { getUsers } from "../../services/user";

export function* getUsersSaga(action) {
  try {
    const data = yield call(getUsers);
    yield put(getUsersSuccess(data));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS_START, getUsersSaga);
}

export default userSaga;
