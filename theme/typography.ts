import { scaleFont } from './mixins'

// FONT FAMILY
export const RobotoFontFamily = {
  light: 'Roboto-Light',
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  bold: 'Roboto-Bold',
}

// FONT WEIGHT
export const FONT_WEIGHT_LIGHT = '300'
export const FONT_WEIGHT_REGULAR = '400'
export const FONT_WEIGHT_MEDIUM = '500'
export const FONT_WEIGHT_BOLD = '700'

// FONT SIZE
export const FONT_SIZE_22 = scaleFont(22)
export const FONT_SIZE_20 = scaleFont(20)
export const FONT_SIZE_18 = scaleFont(18)
export const FONT_SIZE_17 = scaleFont(17)
export const FONT_SIZE_16 = scaleFont(16)
export const FONT_SIZE_15 = scaleFont(15)
export const FONT_SIZE_14 = scaleFont(14)
export const FONT_SIZE_12 = scaleFont(12)
export const FONT_SIZE_10 = scaleFont(10)

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24)
export const LINE_HEIGHT_20 = scaleFont(20)
export const LINE_HEIGHT_16 = scaleFont(16)

// FONT STYLE
export const FONT_LIGHT = {
  fontFamily: RobotoFontFamily.light,
  fontWeight: FONT_WEIGHT_BOLD,
}
export const FONT_REGULAR = {
  fontFamily: RobotoFontFamily.regular,
  fontWeight: FONT_WEIGHT_REGULAR,
}
export const FONT_MEDIUM = {
  fontFamily: RobotoFontFamily.medium,
  fontWeight: FONT_WEIGHT_BOLD,
}
export const FONT_BOLD = {
  fontFamily: RobotoFontFamily.bold,
  fontWeight: FONT_WEIGHT_BOLD,
}
