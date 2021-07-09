import { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux'
import ImagePicker, { Image } from 'react-native-image-crop-picker'
import { Alert } from 'react-native'
import { useTranslation } from 'react-i18next'

import { FileSizeValidation } from '../../constants/file-size-validation'
import { imageSettings } from '../data'

const useHandlers = () => {
  const { t } = useTranslation()
  const [selectedImage, setSelectedImage] = useState<Image | null>(null)

  const handleGalleryUpload = (): void => {
    ImagePicker.openPicker(imageSettings).then((image) => {
      validateSize(image)
    })
  }

  const handleCameraUpload = (): void => {
    ImagePicker.openCamera(imageSettings).then((image) => {
      validateSize(image)
    })
  }

  const validateSize = (image: Image) => {
    if (image.size >= FileSizeValidation.IMAGE) {
      Alert.alert(t(`toastMessages.error`), t('common.fileSizeError'), [
        {
          text: t(`forms.buttonLabels.cancel`),
          style: 'cancel',
        },
      ])
      setSelectedImage(null)
    } else {
      setSelectedImage(image)
    }
  }

  return {
    handleCameraUpload,
    handleGalleryUpload,
    selectedImage,
    setSelectedImage
  }
}


export default useHandlers
