import { FontWeight } from './constants'

const defaultFontWeights = {
  [FontWeight.bold]: 700,
  [FontWeight.regular]: 400
}

export default weight => {
  if (!Object.values(FontWeight).includes(weight)) {
    throw Error(
      `[getFontWeight] Unsupported font weight: ${weight}. Expected one of ${Object.values(
        FontWeight
      )}.`
    )
  }

  return defaultFontWeights[weight]
}
