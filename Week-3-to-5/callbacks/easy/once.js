// Problem Description – once(fn)
//
// You are required to implement a wrapper function named once that accepts a
// callback-based asynchronous function `fn`.
// The wrapper should ensure that `fn` is executed only on the first call.
// Any subsequent calls should not re-execute `fn` and should instead invoke
// the callback with the same result (or error) from the first invocation.

function once(fn) {
    let hasStarted = false;
    let hasCompleted = false;
    let memo;
    let pending = [];

    return function (...args) {
        const cb = args.at(-1);

        if (typeof cb !== "function") {
            throw new TypeError("Last argument must be a callback function");
        }

        if (hasCompleted) {
            cb.apply(this, memo);
            return;
        }

        pending.push({ cb, thisArg: this });

        if (hasStarted) {
            return;
        }

        hasStarted = true;

        const callArgs = args.slice(0, -1);
        const onceCallback = (...resultArgs) => {
            hasCompleted = true;
            memo = resultArgs;

            const queued = pending;
            pending = [];
            for (const waiter of queued) {
                waiter.cb.apply(waiter.thisArg, memo);
            }
        };

        fn.apply(this, [...callArgs, onceCallback]);
    };
}

module.exports = once;
