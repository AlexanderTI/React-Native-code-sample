import React, { useEffect } from 'react'
import { Text, View, Modal, ImageBackground} from 'react-native'
import { useTranslation } from 'react-i18next'

import { styles } from './styles'
import { IUser } from '../types/profile'
import { Avatar, Button, IconButton } from './components'
import { imageAssets } from './assets'
import useCameraHandlers from './hooks/use-camera-handlers'
import useModalHandlers from './hooks/use-modal-handlers'
import useRequestHandlers from './hooks/use-request-handlers'


interface IProps {
  data: IUser['person']
}

const ChangeAvatarBlock: React.FC<IProps> = ({ data }) => {
  const { t } = useTranslation()

  const { handleCameraUpload, handleGalleryUpload, selectedImage, setSelectedImage } = useCameraHandlers()
  const { handleCancel, modalVisible, setModalVisible } = useModalHandlers()
  const { makeRequestOnChange } = useRequestHandlers()

  const handleSave = (): void => {
    selectedImage?.data && makeRequestOnChange(selectedImage.data)
  }

  useEffect(() => {
    return () => {
      setSelectedImage(null)
    }
  }, [modalVisible])

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
