// Default Param

function calc(a, b) {
  return 2 * (a + b);
}

console.log(calc(2, 3)); // 10

// Sample #1
function multiply(a, b = 4) {
  console.log(b);
  console.log(a * b);
}

console.log(multiply(5)); // 20
