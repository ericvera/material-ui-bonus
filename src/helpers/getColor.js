import { Color } from './constants'

const defaultColorValues = {
  [Color.brand]: '#12C789',
  [Color.primary]: '#2E2E2E',
  [Color.primaryContrast]: '#FFFFFF',
  [Color.primaryDisabled]: '#B7B7B7',
  [Color.secondary]: '#777777',
  [Color.confirmAction]: '#FA4747',
  [Color.inputBackground]: '#E3FFF5',
  [Color.inputBackgroundDisabled]: '#F7F7F7',
  [Color.background]: '#FFFFFFDD',
  [Color.transparent]: 'transparent'
}

export default color => {
  if (!Object.values(Color).includes(color)) {
    throw Error(
      `[getColor] Unsupported color value: ${color}. Expected one of ${Object.values(
        Color
      )}.`
    )
  }

  return defaultColorValues[color]
}
