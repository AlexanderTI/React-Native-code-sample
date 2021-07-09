import { AxiosResponse } from 'axios'
import { put, call, takeEvery } from 'redux-saga/effects'
import { userPersonEdit } from '../../api'
import { IUser } from '../../types/profile'
import { SagaPayload } from '../../types/saga'
import {
  requestUserPersonEdit,
  userPersonEditSuccess,
  userPersonEditError,
} from './slice'
import { requestErrorsSaga } from '../common'

export function* userPersonEditRequestSaga({
  payload,
}: SagaPayload<Partial<IUser['person']>>) {
  try {
    const response: AxiosResponse = yield call(userPersonEdit, payload)

    if (response) {
      yield put(userPersonEditSuccess())
    }
  } catch (error) {
    yield call(requestErrorsSaga, error, userPersonEditError)
  }
}

export function* userPersonEditRequestWatchSaga() {
  yield takeEvery(requestUserPersonEdit, userPersonEditRequestSaga)
}
