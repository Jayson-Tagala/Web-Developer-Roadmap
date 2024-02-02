/**
 * 
In JavaScript, a callback is a function that is passed as an argument to another function and is executed after some operation has been completed or a certain event has occurred. Callbacks are a fundamental concept in asynchronous programming, allowing you to work with tasks that may take some time to complete, such as fetching data from a server, reading a file, or handling user input.
 */

/*
function one(call_two) {
   console.log("Step 1 is completed... Please call step 2 within 5 seconds");
  setTimeout(call_two, 5000);
}

function two(call_three) {
  console.log("Step 2");
  setTimeout(call_three, 2000);
}

function three() {
  console.log("Step 2 is done...");
}

- Define the callbacks function

function callTwo() {
  two(three);
}

function callThree() {
  three();
}

one(callTwo);
*/

// Other Sample
/*
let order = (call_production) => {
  console.log("order placed, please call production");
  setTimeout(call_production, 3000);
};

let production = () => {
  console.log("order received, starting production..");
};

order(production);
*/

// Advanced Example

let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let order = (fruit_name, call_production) => {
  setTimeout(() => {
    console.log(`${stocks.fruits[fruit_name]} was selected`);

    call_production();
  }, 2000);
};

let production = () => {
  setTimeout(() => {
    console.log("Production has started...");

    setTimeout(() => {
      console.log("The food has been chopped");

      setTimeout(() => {
        console.log(
          `${stocks.liquid[0]} and ${stocks.liquid[1]} was been added`
        );

        setTimeout(() => {
          console.log("the machine was started");

          setTimeout(() => {
            console.log(`ice cream was placed in ${stocks.holder[0]}`);
          }, 2000);

          setTimeout(() => {
            console.log("The ice cream was ready to serve");
          }, 5000);
        }, 1000);
      }, 1000);
    }, 2000);
  }, 1000);
};

order(2, production);
