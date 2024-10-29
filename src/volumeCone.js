/**
 * Given cone height and radius (numbers). Evaluate volume of a cone
 * @param {number} h - height
 * @param {number} r - radius
 * @returns {number}
 */
module.exports.volumeCone = function volumeCone(h, r) {
  let res = (1/3)*Math.PI*r**2*h
  let res2 = res.toFixed(2)
  return(res2)
  throw new Error('Not implemented');
};
