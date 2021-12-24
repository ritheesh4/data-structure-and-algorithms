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
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") console.log("Found nemo at ", i);
  }
};

// findNemo(nemo);
// findNemo(moreItems);
findNemo(largeArray);
