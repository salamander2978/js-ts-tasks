/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if(typeof str !== 'string'){
    return("Not a string")
  }
  if (typeof symbolsCount !== 'number' || symbolsCount < 0 || !Number.isInteger(symbolsCount)) {
    return("No")
  }
  if (symbolsCount > str.length) {
    return str;
  }
  const copied = str.slice(-symbolsCount);
  return copied + str + copied;
  throw new Error('Not implemented');
}
