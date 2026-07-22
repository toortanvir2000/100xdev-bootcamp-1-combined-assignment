// Using `1-counter.md` or `2-counter.md` from the easy section, can you create a
// clock that shows you the current machine time?

// Can you make it so that it updates every second, and shows time in the following formats -

//  - HH:MM::SS (Eg. 13:45:23)
//  - HH:MM::SS AM/PM (Eg 01:45:23 PM)
function currentTime(timestamp) {
  const date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();
  console.log(`${hours}:${minutes}:${seconds}`);
  let amPm = "AM";
  if (hours > 12) {
    hours -= 12;
    amPm = "PM";
  } else if (hours === 12) {
    amPm = "PM";
  }
  console.log(`${hours}:${minutes}:${seconds} ${amPm}`);
}

function counter(time, count) {
  if (count > 60) return;
  setTimeout(() => {
    currentTime(time);
    counter((time += 1000), ++count);
  }, 1000);
}

counter(Date.now(), 0);
