// Golder ratio scale with base 8
const Spacing = [0, 5, 8, 13, 21, 34, 55, 89]

export default level => {
  if (typeof level !== 'number') {
    throw `\`level\` must be a number between 0 and ${Spacing.length}`
  }

  return Spacing[level]
}
