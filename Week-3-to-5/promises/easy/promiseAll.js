// Problem Description – Custom Implementation of Promise.all

// You are required to implement your own version of Promise.all without using the built-in method. 
// The function should accept an array of values that may include Promises or plain constants. 
// It must resolve with an array of results in the same order once all inputs resolve, or reject immediately if any input rejects.
function promiseAll(promises) {
  return new Promise((res, rej) => {
    if (promises.length < 1) res([]);
    let results = [];
    let resolved = 0;
    promises.map((p, idx) => {
      Promise.resolve(p)
        .then((val) => {
          results[idx] = val;
          resolved++;

          if (promises.length === resolved) {
            res(results);
          }
        })
        .catch((e) => {
          rej(e);
        });
    });
  });
}

module.exports = promiseAll;
