/**
 * Given number n and number k. Find the whole part and the remainder of the integer division of n by k.
 * Return a string formatted "wholePart remainder"
 * @param {number} n - number
 * @param {number} k - number
 * @returns {number}
 */
module.exports.divider = function divider(n, k) {
  const whole = (n-(n%k))/k;
  const remainder = n % k;
  return(whole +" "+ remainder)
  throw new Error('Not implemented');
};
