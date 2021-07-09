import { put, call, takeEvery } from 'redux-saga/effects'
import { userImageEdit } from '../../api/profile-edit'
import { SagaPayload } from '../../types/saga'
import { requestImageEdit, imageEditSuccess, imageEditError } from './slice'
import { requestUserPersonEdit } from '../user-person-edit/slice'
import I18n from 'i18n'
import { AxiosResponse } from 'axios'
import { requestErrorsSaga } from '../../common'

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
    yield call(requestErrorsSaga, error, imageEditError, {
      title: I18n.t(`toastMessages.error`),
      message: error.message,
    })
  }
}

export function* imageEditRequestWatchSaga() {
  yield takeEvery(requestImageEdit, imageEditRequestSaga)
}
