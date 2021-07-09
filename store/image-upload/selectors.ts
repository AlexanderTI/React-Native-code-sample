import { RootState } from '...'

export const isImageLoading = (state: RootState): boolean =>
  state.requests.profileEdit.imageEdit.isLoading
