import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '../../types/profile'

type InitialState = {
  isLoading: boolean
  newUser: Partial<IUser['person']> | null
  error: any
}

const initialState: InitialState = {
  isLoading: false,
  newUser: null,
  error: null,
}

const userPersonEdit = createSlice({
  name: 'userPersonEdit',
  initialState,
  reducers: {
    requestUserPersonEdit: (
      state,
      { payload }: PayloadAction<Partial<IUser['person']>>,
    ): void => {
      state.isLoading = true
      state.newUser = payload
    },
    userPersonEditSuccess: (state): void => {
      state.isLoading = false
    },
    userPersonEditError: (state, { payload }: PayloadAction<any>): void => {
      state.isLoading = false
      state.error = payload
    },
  },
})

export const {
  requestUserPersonEdit,
  userPersonEditSuccess,
  userPersonEditError,
} = userPersonEdit.actions

export default userPersonEdit.reducer
