/**
 * The function "foo" takes a callback function as an argument and executes it under certain
 * conditions.
 * @param bar - The parameter "bar" is a function that is passed as an argument to the "foo" function.
 * It can be any function that will be executed when called inside the "foo" function.
 */
function foo(bar) {
  bar();
}

foo(function () {
  console.log("bar"); // bar
});

function named() {
  console.log("bar");
}

foo(named); // bar

// Call Back Function

/* The function `foo` is defined with a parameter `bar`, which is expected to be a function. Inside the
`foo` function, the `bar` function is executed. */
function foo(bar) {
  if (itsNight) {
    bar();
  }

  if (isDrinksOverCheckOnline) {
    bar();
  }
}
