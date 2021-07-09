import I18n from '../../utils/i18n/i18n'
import * as Sentry from '@sentry/react-native'
import { AxiosError } from 'axios'
import { Alert } from 'react-native'
import { ActionCreatorWithPayload } from '@reduxjs/toolkit'
import { put } from 'redux-saga/effects'

import { imageEditError } from '../image-upload/slice'

export function* requestErrorsSaga(
  error: AxiosError,
  onError: ActionCreatorWithPayload<any, string>
) {
  if (onError === imageEditError) {
    Alert.alert({
      title: I18n.t(`toastMessages.error`),
      message: error.message,
    })
  } else {
    yield put(onError(error.response?.data.message || error.message))
  }

  Sentry.captureException(JSON.stringify(error)) // Sentry logs
}
