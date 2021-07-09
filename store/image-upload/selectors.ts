import { RootState } from '../../root-reducer'

export const isImageLoading = (state: RootState): boolean =>
  state.requests.profileEdit.imageEdit.isLoading
