import { put, call, takeEvery } from 'redux-saga/effects'
import { AxiosResponse } from 'axios'

import { requestImageEdit, imageEditSuccess, imageEditError } from './slice'
import { requestUserPersonEdit } from '../user-person-edit/slice'
import { requestErrorsSaga } from '../common'
import { userImageEdit } from '../../api/profile-edit'
import { SagaPayload } from '../../types/saga'

export function* imageEditRequestSaga({ payload }: SagaPayload<any>) {
  try {
    const response: AxiosResponse = yield call(userImageEdit, payload)

    if (response) {
      yield put(
        requestUserPersonEdit({
          avatar: JSON.parse(response.data).uid,
        }),
      )
      yield put(imageEditSuccess())
    }
  } catch (error) {
    yield call(requestErrorsSaga, error, imageEditError)
  }
}

export function* imageEditRequestWatchSaga() {
  yield takeEvery(requestImageEdit, imageEditRequestSaga)
}
