import { useState } from 'react'

const useHandlers = () => {

    const [modalVisible, setModalVisible] = useState(false)

    const handleCancel = (): void => {
      setModalVisible(false)
    }
  

  return {
    handleCancel,
    modalVisible,
    setModalVisible,
  }
}


export default useHandlers
