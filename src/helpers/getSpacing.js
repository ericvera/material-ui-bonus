// Golder ratio scale with base 8
const Spacing = [0, 5, 8, 13, 21, 34, 55, 89, 144, 232]

export default level => {
  return Spacing[level]
}
