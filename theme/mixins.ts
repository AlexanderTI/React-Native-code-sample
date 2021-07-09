import { Dimensions, PixelRatio } from 'react-native'

export const WINDOW_WIDTH = Dimensions.get('window').width
export const WINDOW_HEIGHT = Dimensions.get('window').height
const guidelineBaseWidth = 375

export const scaleSize = (size: number): number =>
  (WINDOW_WIDTH / guidelineBaseWidth) * size

export const scaleFont = (size: number): number =>
  size * PixelRatio.getFontScale()

export const scaleImage = (size: number): number =>
  size * PixelRatio.getPixelSizeForLayoutSize(size)

export function boxShadow(
  color: string,
  offset = { height: 2, width: 2 },
  radius = 8,
  opacity = 0.2,
) {
  return {
    shadowColor: color,
    shadowOffset: offset,
    shadowOpacity: opacity,
    shadowRadius: radius,
    elevation: radius,
  }
}
