// Promises
/**
 * 
Promises are a JavaScript feature introduced to handle asynchronous operations more effectively and avoid the so-called "callback hell" — a situation where multiple nested callbacks make code hard to read and maintain.

A Promise is an object representing the eventual completion or failure of an asynchronous operation. It can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully.
Rejected: The operation failed.
Promises have methods such as then() to handle fulfillment and catch() to handle rejection.
 */

/**
 * Short Example
    let stocks = {
  fruits: ["strawberry", "grapes", "banana", 
"apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (is_shop_open) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our shop is closed!"));
    }
  });
};

order(2000, () => console.log(`${stocks.fruits
[0]} was selected`));

 */

// Convert the callback hell to Promises
// let stocks = {
// // fruits: ["strawberry", "grapes", "banana", "apple"],
// liquid: ["water", "ice"],
// holder: ["cone", "cup", "stick"],
// toppings: ["chocolate", "peanuts"],
// };

// The order function now returns a Promise that resolves with the selected fruit after a delay of 2 seconds.

/* The `let order = (fruit_name) => {` is defining a function called `order` that takes a parameter
`fruit_name`. This function is used to handle the ordering process of a fruit. */
// let order = (fruit_name) => {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// resolve(stocks.fruits[fruit_name]);
// }, 2000);
// });
// };

// The production function is also Promise-based and follows a sequential execution of steps. Each step resolves with the necessary information or action before proceeding to the next step.

/* The `let production = (fruit) => {` is defining a function called `production` that takes a
parameter `fruit`. This function is used to handle the production process of the selected fruit. */

// let production = (fruit) => {
// return (
// new Promise((resolve, reject) => {
// console.log("Production has started...");
// setTimeout(() => {
// console.log("The food has been chopped");
// // resolve(`${stocks.liquid[0]} and ${stocks.liquid[1]}`);
// }, 1000);
// })
//
// // // /**The then method chains the promises together to ensure that each step is executed in order. */
// .then((liquid) => {
// return new Promise((resolve, reject) => {
// // console.log(`Using ${liquid} to make the ice cream`);
// setTimeout(() => {
// // console.log("the machine was started");
// resolve("ice cream");
// }),
// 1000;
// });
// })
// .then((ice_cream) => {
// return new Promise((resolve, reject) => {
// setTimeout(() => {
// // console.log("The ice cream was ready to eat");
// resolve(ice_cream);
// }, 3000);
// });
// })
// );
// };

// order(2)
// .then((fruit) => {
// console.log(`${fruit} was selected.`);
// return production(fruit);
// })
// .then((result) => {
// console.log("Order completed: ", result);
// })

/**
 * Finally, we handle any errors using the catch method to catch any errors that may occur during the execution of the Promises.
 */
//.catch((error) => {
//console.log("Error occurred: ", error);
//});

/**
 * Promise = An Object that manages asynchronous operations. Wrap a Promise Object around {asynchronous code} " I promise to return a value" PENDING -> RESOLVED or REJECTED new Promise((resolve, reject) => {asynchronous code})
 */

// DO THESE CHORES IN ORDER

/**
 * 1. WALK THE DOG
 * 2. CLEAN THE KITCHEN
 * 3. TAKE OUT THE TRASH
 */

function walkDog() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dogWalked = true;

      if (dogWalked) {
        resolve("You walk the dog");
      } else {
        reject("You DIDN't walk the dog!");
      }
    }, 1500);
  });
}

function cleanKitchen() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const kitchenCleaned = true;

      if (kitchenCleaned) {
        resolve("You clean the kitchen");
      } else {
        reject("You DIDN't clean the kitchen!");
      }
    }, 2500);
  });
}

function TakeOutTrash() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const outTheTrash = false;

      if (outTheTrash) {
        resolve("You take out the trash");
      } else {
        reject("You DIDN'T take out the trash!");
      }
    }, 500);
  });
}

walkDog()
  .then((value) => {
    console.log(value);
    return cleanKitchen();
  })
  .then((value) => {
    console.log(value);
    return TakeOutTrash();
  })
  .then((value) => {
    console.log(value);
    console.log("You finished all the chores!");
  })
  .catch((error) => console.error(error));
