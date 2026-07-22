// ## Counter without setInterval

// Without using setInterval, try to code a counter in Javascript. There is a hint at the bottom of the file if you get stuck.

// (Hint: setTimeout)

function counter (i) {
    if (i > 60) return;
    setTimeout(() => {
        console.log("Second passed", i);
        counter(++i);
    }, 1000);
}

counter(0);