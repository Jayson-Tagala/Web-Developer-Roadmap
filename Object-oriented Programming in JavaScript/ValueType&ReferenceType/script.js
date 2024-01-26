/*
    Value Types
    - Number
    - String
    - Boolean
    - Symbol
    - undefined
    - null

    */

/*
    Reference Types
    - Object
    - Function
    - Array
 */

let x = 10;
let y = x;

x = 20;
console.log(x);
console.log(y);

// PRIMITIVES are copied by their value
// OBJECTS are copied by their reference

let obj = { value: 10 };

function increase(obj) {
  obj.value++;
}

increase(obj);
console.log(obj);
