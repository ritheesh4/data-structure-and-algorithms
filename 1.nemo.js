const { performance } = require("perf_hooks");

const nemo = ["nemo"];
const moreItems = [
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "test",
  "nemo",
];
const largeArray = new Array(100000).fill("nemo");

const findNemo = (array) => {
  let time0 = performance.now();
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") console.log("Found nemo at ", i);
  }
  let time1 = performance.now();
  console.log("Call to find Nemo took " + (time1 - time0) + " milliseconds");
};

// findNemo(nemo);
// findNemo(moreItems);
findNemo(largeArray);
