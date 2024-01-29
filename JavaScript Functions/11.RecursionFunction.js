/**
 * Recursion --> a function that refer or  call itself.
 * You must have base condition
 */

function fetchWater(count) {
  if (count === 0) {
    console.log("No more Water left!");
    return;
  }
  console.log("Fetching water...");
  fetchWater(count - 1);
}

fetchWater(5);
