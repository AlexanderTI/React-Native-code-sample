import React, { useState } from 'react'
import { Text, View, Modal, ImageBackground, Alert } from 'react-native'
import { styles } from './styles'
import { IUser } from '../types/profile'
import { Avatar, Button, IconButton } from './components'
import ImagePicker, { Image } from 'react-native-image-crop-picker'
import { imageAssets } from './assets'
import useHandlers from './hooks/use-handlers'
import { FileSizeValidation } from '../constants/file-size-validation'
import { useTranslation } from 'react-i18next'

interface IProps {
  data: IUser['person']
}

const imageSettings = {
  width: 400,
  height: 400,
  cropping: true,
  includeBase64: true,
}

const ChangeAvatarBlock: React.FC<IProps> = ({ data }) => {
  const { t } = useTranslation()

  const { makeRequestOnChange } = useHandlers()

  const [modalVisible, setModalVisible] = useState(false)
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

  const handleCancel = (): void => {
    setSelectedImage(null)
    setModalVisible(false)
  }

  const handleSave = (): void => {
    selectedImage?.data && makeRequestOnChange(selectedImage.data)
  }

  return (
    <View style={styles.container}>
      <Avatar uri={data?.avatar} />
      <View style={styles.sideBlock}>
        <Text style={styles.disclamer}>{t(`alerts.body.profileEdit`)}</Text>
        <IconButton
          Icon={imageAssets.edit}
          onPress={(): void => setModalVisible(true)}
          text={t(`forms.buttonLabels.changePhoto`)}
          elementStyle={styles.iconButtonContainer}
          textStyle={styles.buttonTitle}
        />
      </View>

      <Modal
        visible={modalVisible}
        onRequestClose={(): void => setModalVisible(false)}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.imageControls}>
              <ImageBackground
                source={
                  selectedImage
                    ? { uri: selectedImage.path }
                    : imageAssets.avatarPlaceholder
                }
                style={styles.imagePreview}
                imageStyle={styles.imagePreviewImage}
              />
              <View>
                <Button
                  onPress={handleGalleryUpload}
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.enterButton}
                  titleStyle={styles.buttonTitle}
                  title={t(`forms.buttonLabels.gallery`)}
                />
                <Button
                  onPress={handleCameraUpload}
                  containerStyle={styles.buttonContainer}
                  buttonStyle={styles.enterButton}
                  titleStyle={styles.buttonTitle}
                  title={t(`forms.buttonLabels.camera`)}
                />
              </View>
            </View>
            <View>
              <Button
                onPress={handleSave}
                containerStyle={styles.enterButtonBlock}
                buttonStyle={styles.enterButton}
                titleStyle={styles.enterButtonText}
                disabled={!selectedImage}
                title={t(`forms.buttonLabels.save`)}
              />
              <Button
                onPress={handleCancel}
                containerStyle={styles.cancelButtonBlock}
                buttonStyle={styles.enterButton}
                titleStyle={styles.enterButtonText}
                title={t(`forms.buttonLabels.cancel`)}
              />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

export default ChangeAvatarBlock
