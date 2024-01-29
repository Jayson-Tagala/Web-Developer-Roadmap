// Nested Function

// Sample #1

function outer() {
  console.log("outer");
  function inner() {
    console.log("inner");
  }
  inner();
}

console.log(outer());

// Sample #2

function setupItem() {
  let myNum = 1;

  function increment() {
    return console.log(myNum++);
  }
  increment();
  increment();
}

setupItem();
