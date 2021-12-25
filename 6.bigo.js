//Log all pairs of array
const boxes = ["a", "b", "c", "d"];

const logAllPairsOfArray = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
};

logAllPairsOfArray(boxes);
//O(n^2)
//Here the we are having nested loops. So squaring the loops.