/**
 * Calculate the distance between two points represented on the standard Planar coordinate system
 * with precision 2 decimal places
 * Each Point represented by object contains two property (X and Y)
 * @param {Object} firstPoint
 * @param {Object} secondPoint
 * @returns {number}
 */
module.exports.getDistance = function getDistance(firstPoint, secondPoint) {
  let distanceX = Math.abs((firstPoint['X']-secondPoint['X']))
  let distanceY = Math.abs((firstPoint['Y']-secondPoint['Y']))
  let result = Math.sqrt(distanceX*distanceX + distanceY*distanceY)
  return(result.toFixed(2))
};
