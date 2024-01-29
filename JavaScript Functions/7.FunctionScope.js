function doSomething() {
  let x = 10;
  const y = 20;
  var z = 30;

  console.log(x, y, z);
}

// *First Principle --> Variable defined inside a function cannot be accessed from outside.*

/* `doSomething();` is calling the `doSomething` function. */
doSomething(); // 10 20 30

// console.log(x, y, z); Will give an error / You cannot access this variable outside a scope of this function.

// *Second Principle --> If the function basically now can access anything and everything from this scope*

var x = 10;
const y = 20;
let z = 30;

function newDoSomething() {
  console.log(x, y, z);
}

newDoSomething(); // 10 20 30

// Wherever the function, whatever the scope the function is defined in that scope, if there are variables declared, the function can access this variable. This function is declared in the global scope, it means that function is not inside another.
