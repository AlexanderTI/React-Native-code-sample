import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  isLoading: boolean
  data: any
  error: any
}

const initialState: InitialState = {
  isLoading: false,
  data: '',
  error: null,
}

const imageEdit = createSlice({
  name: 'imageEdit',
  initialState,
  reducers: {
    requestImageEdit: (state, { payload }: PayloadAction<any>): void => {
      state.isLoading = true
      state.data = payload
    },
    imageEditSuccess: (state): void => {
      state.isLoading = false
    },
    imageEditError: (state, { payload }: PayloadAction<any>): void => {
      state.isLoading = false
      state.error = payload
    },
  },
})

export const {
  requestImageEdit,
  imageEditSuccess,
  imageEditError,
} = imageEdit.actions

export default imageEdit.reducer
