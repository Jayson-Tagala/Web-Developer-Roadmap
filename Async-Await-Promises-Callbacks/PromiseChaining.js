/* The code is simulating the process of making and serving an ice cream. */

/* `let stocks = {` is declaring a variable named `stocks` and assigning it an object value. The object
contains different properties representing different categories of items in stock, such as fruits,
liquids, holders, and toppings. Each property holds an array of items belonging to that category. */
let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

/* The line `let order = (time, work) => {` is declaring a function named `order` that takes two
parameters: `time` and `work`. The `time` parameter represents the time delay in milliseconds before
the work is executed, and the `work` parameter represents the work to be done. The function returns
a Promise that resolves after the specified time delay and executes the work function. */
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

/* The `order(2000, () => console.log(`${stocks.fruits[0]} was selected`))` is a function call to the
`order` function. It specifies a time delay of 2000 milliseconds (2 seconds) and a work function
that logs the first fruit in the `stocks.fruits` array. This means that after a delay of 2 seconds,
the message "strawberry was selected" will be logged to the console. */
order(2000, () => console.log(`${stocks.fruits[0]} was selected`))
  .then(() => {
    return order(0, () => console.log("Production has started"));
  })
  .then(() => {
    return order(2000, () => console.log("The fruits was chopped"));
  })
  .then(() => {
    return order(1000, () =>
      console.log(
        `${stocks.liquid[0]} and ${stocks.liquid[1]} water and ice was selected`
      )
    );
  })

  .then(() => {
    return order(1000, () => {
      console.log("Start the machine");
    });
  })

  .then(() => {
    return order(2000, () => {
      console.log(`ice cream placed on ${stocks.holder[0]}`);
    });
  })

  .then(() => {
    return order(3000, () => {
      console.log(`${stocks.toppings[0]} was selected`);
    });
  })

  .then(() => {
    return order(1000, () => {
      console.log("ice cream was served");
    });
  })

  // * ERROR HANDLING * //

  .catch(() => {
    console.log("Customer left");
  })

  // * FINALLY HANDLER * //

  .finally(() => {
    console.log("day ended, shop is closed");
  });
