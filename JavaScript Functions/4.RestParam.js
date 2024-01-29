function collectThings(x, ...y) {
  console.log(x);
  console.log(y);
}
console.log(collectThings(1, 2, 3, 4, 5, 6, 7, 8, 9));

// Other Sample

function sum(a, b, ...args) {
  let num = a + b;

  for (let n of args) {
    num = num + n;
  }
  return num;
}

let result = sum(4, 3, 6, 2);

console.log(result); //15
