// Returning Function

// Sample #1
function sum(a, b) {
  return a + b;
}
sum(9, 10); // 19

// Or you can rewrite it like

function sum1(a, b) {
  let ret = a + b;
  return ret;
}

sum1(10, 10); // 20

// Sample #2 --> Using Multiple Returns

let login = function (password) {
  if (password === "test123") {
    return "Successfully logged in";
  } else {
    return "Password incorrect, please try again";
  }
};

console.log(login("test123"));

/*
 #TASK

 1. Create a function called favNum and set it up with a parameter called num, use return to return whatever number is given as the argument, log this to the console with the message 'My fav number is [num] using template literals.

 2. What will be t he following code return?

 function password(a){
  if (a.length >8){
    return console.log(`You chose ${a}`);
  } else {
    return console.log("Not enough letter");
  }
 }

 password('PurpleRhino123');
 password('Circle77');
 */

// TASK #1

let favNum = function (num) {
  if (num === 4) {
    return `my favorite number is ${num}`;
  } else {
    return "Try again!";
  }
};

console.log(favNum(4)); // my favorite number is 4
console.log(favNum(5)); // Try again!

// TASK #2

function password(a) {
  if (a.length > 8) {
    return console.log(`You chose ${a}`);
  } else {
    return console.log("Not enough letter");
  }
}

console.log(password("PurpleRhino123")); // You chose PurpleRhino123
console.log(password("Circle77")); // Not enough letter
