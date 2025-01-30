/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  const all = (promiseList) => {
    return new Promise((resolve, reject) => {
        let results = new Array(promiseList.length);
        let completed = 0;
        
        promiseList.forEach((promise, index) => {
            promise.then(
                data => {
                    results[index] = data;
                    completed++;
                    if (completed === promiseList.length) {
                        resolve(results);
                    }
                },
                reject
            );
        });
    });
};
}
