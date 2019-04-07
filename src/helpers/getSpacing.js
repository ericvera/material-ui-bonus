import { SpacingLevel } from './constants'

// Golden ratio scale with base 8
const defaultSpacing = {
  [SpacingLevel.l0]: 0,
  [SpacingLevel.l1]: 5,
  [SpacingLevel.l2]: 8,
  [SpacingLevel.l3]: 13,
  [SpacingLevel.l4]: 21,
  [SpacingLevel.l5]: 34,
  [SpacingLevel.l6]: 55,
  [SpacingLevel.l7]: 89,
  [SpacingLevel.l8]: 144,
  [SpacingLevel.l9]: 232
}

export default level => {
  if (!Object.values(SpacingLevel).includes(level)) {
    throw Error(
      `[getSpacing] Unsupported spacing level: ${level}. Expected one of ${Object.values(
        SpacingLevel
      )}.`
    )
  }

  return defaultSpacing[level]
}
