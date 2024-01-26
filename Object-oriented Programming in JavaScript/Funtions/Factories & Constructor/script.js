// Factory Function
function createCircle(radius) {
  return {
    radius,
    draw: function () {
      console.log("draw");
    },
  };
}

const circle = createCircle(1);

// Constructor Function
function Circle(radius) {
  this.radius = radius;
  this.draw = function () {
    console.log("draw");
  };
}

/* The line `const another = new Circle(1);` is creating a new instance of the `Circle` constructor
function. It is using the `new` keyword to create a new object and assign it to the `another`
constant. The `Circle` constructor function is called with an argument of `1`, which sets the
`radius` property of the new object to `1`. The `draw` method is also added to the new object. */
const another = new Circle(1);

// Constructor Properties
