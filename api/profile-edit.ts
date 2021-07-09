import { Image } from 'react-native-image-crop-picker'
import RNFetchBlob from 'rn-fetch-blob'
import { ApiUrl } from '../constants/config'

export function userImageEdit(data: Image) {
  return RNFetchBlob.fetch(
    'POST',
    `${ApiUrl.base}${ApiUrl.images}?public=true`,
    { 'Content-Type': 'multipart/form-data' },
    [{ name: 'avatar', filename: 'avatar.jpg', data }],
  )
}
