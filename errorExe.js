
// extractNumbers("bad");         // שגיאהfunction extractNumbers(arr) {
  
function extractNumbers(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("Input must be an array");
  }
  return arr.filter(x => typeof x === "number" && !Number.isNaN(x));
}

// console.log(extractNumbers([1, "hi", 5])); // [1, 5]
// extractNumbers("bad");                  // Error



function sumNumbersSafe(arr) {
  try {
    const nums = extractNumbers(arr);
    return nums.reduce((sum, n) => sum + n, 0);
  } catch (err) {
    console.warn("Warning:", err.message);
    return 0;
  }
}

console.log(sumNumbersSafe([2, 4, "bad"])); // 6
console.log(sumNumbersSafe("fail"));        //   0


function filterLargeSums(arrList, minTotal) {
  return arrList.filter(sub => sumNumbersSafe(sub) >= minTotal);
}

console.log(filterLargeSums([[1, 2, 3], [10, "bad", 5], "fail"], 10));
// [[10, "bad", 5]]