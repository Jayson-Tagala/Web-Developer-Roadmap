let stocks = {
  fruits: ["strawberry", "grapes", "banana", "apple"],
  liquid: ["water", "ice"],
  holder: ["cone", "cup", "stick"],
  toppings: ["chocolate", "peanuts"],
};

let is_shop_open = true;

/*
let order = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve();
    } else {
      reject();
    }
  });
};
*/

// ASYNC, AWAITS, TRY & CATCH

async function order() {
  try {
    await abc;
  } catch (error) {
    console.log("abc doesn't exist");
  } finally {
    console.log("runs the code anyways");
  }
}

order().then(() => {
  console.log("Hello World");
});
