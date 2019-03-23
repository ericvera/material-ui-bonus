const Base = 16
const FontSizes = [0, 0.618, 1, 1.618, 2.617]

/**
 * @param {1,2,3,4} level
 */
export default level => {
  return `${Base * FontSizes[level]}px`
}
