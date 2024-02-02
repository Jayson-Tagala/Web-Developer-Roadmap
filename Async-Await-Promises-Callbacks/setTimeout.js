/**
setTimeout is a function in JavaScript that allows you to schedule the execution of a function after a specified delay, measured in milliseconds. It's commonly used for creating timers and delaying the execution of code. */

setTimeout(() => {
  console.log(" One Second");
}, 1000);

setTimeout(() => {
  console.log(" Two Second");
}, 2000);

setTimeout(() => {
  console.log(" Three Second");
}, 3000);

setTimeout(() => {
  console.log(" Four Second");
}, 4000);

// You can rewrite this simple example with...

const timeouts = [
  { message: "One Second", delay: 1000 },
  { message: "Two Second", delay: 2000 },
  { message: "Three Second", delay: 3000 },
  { message: "Four Second", delay: 4000 },
];

timeouts.forEach(({ message, delay }) => {
  setTimeout(() => {
    console.log(message);
  }, delay);
});
