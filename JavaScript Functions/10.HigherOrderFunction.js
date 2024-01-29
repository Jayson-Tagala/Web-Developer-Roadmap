// Higher Order Function (HOF)
/**
 * 1). It takes one or more functions as argument
 * 2). It may return a function
 */

/* The function `getCapture` is a higher-order function that takes a function `camera` as an argument.
It then calls the `camera` function. */
function getCapture(camera) {
  camera();
}
getCapture(function () {
  console.log("Canon");
});

function returnFn() {
  return function () {
    console.log("returning");
  };
}

const fn = returnFn();
console.log(fn());
