import { FontSizeLevel } from './constants'

const defaultFontSize = {
  [FontSizeLevel.l1]: 16 * 0.618,
  [FontSizeLevel.l2]: 16 * 1,
  [FontSizeLevel.l3]: 16 * 1.618,
  [FontSizeLevel.l4]: 16 * 2.617
}

export default level => {
  if (!Object.values(FontSizeLevel).includes(level)) {
    throw Error(
      `[getFontSize] Unsupported font size level: ${level}. Expected one of ${Object.values(
        FontSizeLevel
      )}.`
    )
  }

  return defaultFontSize[level]
}
