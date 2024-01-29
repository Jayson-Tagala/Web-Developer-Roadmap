// Arrow Function

// const add = function (x, y) {
//   return x + y;
// };

// Sample 1
const add = (x, y) => {
  return x + y;
};

console.log(add(3, 2)); // 5

// Sample 2
// let greet = function () {
//   console.log("Hello World");
//   return 1;
// };
//

let greet = () => {
  console.log("Hello World");
};

console.log(greet()); // Hello World

// Sample 3

let greeting = (user) => {
  console.log("Hello " + user);
};

console.log(greeting("Hiro"));
