// Problem Description – promiseAny(promises)

// You are required to implement a function named promiseAny that accepts an array of Promises. 
// The function should return a new Promise that resolves immediately when any one of the input promises resolves successfully. 
// If all the promises reject, the returned Promise should reject with an error.
function promiseAny(promises) {
  return new Promise((resolve, reject) => {
    if (promises.length < 1) reject(new Error("Empty iterabler"));
    let count = 0;
    promises.map((p, i) => {
      Promise.resolve(p)
        .then((val) => resolve(val))
        .catch((e) => {
          count++;

          if (promises.length === count) {
            reject(new Error("All promises were rejected"));
          }
        });
    });
  });
}

module.exports = promiseAny;
