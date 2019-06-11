const BN = require('bn.js')


/**
 * Converts a BN object to a hex string with a '0x' prefix
 *
 * @param {BN} inputBn The BN to convert to a hex string
 * @returns {string} A '0x' prefixed hex string
 *
 */
function bnToHex (inputBn) {
  return addHexPrefix(inputBn.toString(16))
}

/**
 * Converts a hex string to a BN object
 *
 * @param {string} inputHex A number represented as a hex string
 * @returns {Object} A BN object
 *
 */
function hexToBn (inputHex) {
  return new BN(stripHexPrefix(inputHex), 16)
}

/**
 * Used to multiply a BN by a fraction
 *
 * @param {BN} targetBN The number to multiply by a fraction
 * @param {number|string} numerator The numerator of the fraction multiplier
 * @param {number|string} denominator The denominator of the fraction multiplier
 * @returns {BN} The product of the multiplication
 *
 */
function BnMultiplyByFraction (targetBN, numerator, denominator) {
  const numBN = new BN(numerator)
  const denomBN = new BN(denominator)
  return targetBN.mul(numBN).div(denomBN)
}

/**
* adds a hex prefix does not change the original string
* @param {string} hex value
* @returns {string} hex value with `0x` in the beginning
*/

function addHexPrefix (str) {
  if (typeof str !== 'string') return str
  if (str.slice(0, 2) === '0x') return str
  return `0x${str}`
}

/**
* removes hex prefix does not change the original string
* @param {string} hex value
* @returns {string} hex value with `0x` removed from the beginning
*/

function stripHexPrefix (str) {
  if (typeof str !== 'string') return str
  if (str.slice(0, 2) === '0x') return str.slice(2)
  else return str
}

module.exports = {
  hexToBn,
  BnMultiplyByFraction,
  bnToHex,
  addHexPrefix,
  stripHexPrefix,
}
