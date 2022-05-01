const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
ffunction transform(arr) {
  let tempArr = arr;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-prev") {
      tempArr.splice(i, 1);
      tempArr.splice(--i, 1);
    } else if (arr[i] === "--double-next") {
      tempArr.splice(i, 1, ++i);
    }
  }
  return tempArr;
}

module.exports = {
  transform,
};
