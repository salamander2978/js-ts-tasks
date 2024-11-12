/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  start = Number(start);
  end = Number(end);
  if(start > end){
    [start, end]=[end, start];
  }
  const x = end - start + 1;
  const sum = (x * (start + end)) / 2;
  return(sum)
  throw new Error('Not implemented');
};
