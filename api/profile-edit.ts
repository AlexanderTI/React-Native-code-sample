import RNFetchBlob from 'rn-fetch-blob'
import { Image } from 'react-native-image-crop-picker'

import { ApiUrl } from '../constants/config'
import { IUser } from '../types/profile'

export function userPersonEdit(data: Partial<IUser['person']>) {
  return fetch(`${ApiUrl.userProfile}${ApiUrl.myProfile}${ApiUrl.person}`, {
    method :'PUT',
    body: JSON.stringify(data)
  }
  )
}

export function userImageEdit(data: Image) {
  return RNFetchBlob.fetch(
    'POST',
    `${ApiUrl.base}${ApiUrl.images}?public=true`,
    { 'Content-Type': 'multipart/form-data' },
    [{ name: 'avatar', filename: 'avatar.jpg', data }],
  )
}
