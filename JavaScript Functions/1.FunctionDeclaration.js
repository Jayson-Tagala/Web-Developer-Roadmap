// Function Declaration

function printMe() {
  console.log("Hello World!");
}
printMe();

// Parameter

function printThis(param) {
  console.log(param);
}

printThis("tapas");

// Function Expression

const printAnother = function () {
  console.log("print");
};

printAnother();

const printAnotherWithParam = function (a, b) {
  console.log(a, b);
};

printAnotherWithParam(10, 20);
