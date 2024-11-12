/**
 * Write a function which inside given array of numbers counts amount of different elements.
 * @param {Object} arr
 * @returns {number}
 */
module.exports.diffElems = function diffElems(arr) {
  arr2 = []
  arr2.push(arr[0])
  for(i = 0; i < arr.length; i++){
    if(!arr2.includes(arr[i])){
      arr2.push(arr[i])
    }
  }
  return(arr2.length)
}