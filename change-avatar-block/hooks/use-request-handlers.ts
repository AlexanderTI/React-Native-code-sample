import { useCallback } from 'react'
import { useDispatch } from 'react-redux'

import { requestImageEdit } from '../../store/image-upload/slice'

const useHandlers = () => {
  const dispatch = useDispatch()

  const makeRequestOnChange = useCallback(
    (value) => {
      dispatch(requestImageEdit(value))
    },
    [dispatch],
  )

  return {
    makeRequestOnChange
  }
}


export default useHandlers
