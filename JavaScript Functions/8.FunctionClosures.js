// Closures
// Define a function named outer which takes a parameter x
function outer(x) {
  // Define a function named inner which takes a parameter y
  function inner(y) {
    // Return the sum of x and y
    return x + y;
  }
  // Return the inner function
  return inner;
}

// Call the outer function with argument 10 and store the returned inner function in outerReturn
const outerReturn = outer(10);

// Call the inner function returned by outer with argument 2 and log the result to the console
console.log(outerReturn(2)); // Output will be 12

/**
 * closures allow inner functions to retain access to the variables and parameters of their outer functions even after those outer functions have finished executing. In this example, the inner function "closes over" the x parameter of the outer function, forming a closure that enables inner to use x even after outer has completed execution.
 *
 */
