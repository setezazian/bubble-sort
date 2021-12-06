/* jshint expr:true */

// Feel free to add helper functions if needed.
const bubbleSort = (input) => {
  const array = input;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i + 1; j < array.length; j += 1) {
      if (array[i] > array[j]) {
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
    }
  }
  return array;
};

module.exports = bubbleSort;
