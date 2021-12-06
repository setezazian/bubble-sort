/* jshint expr:true */
const isSorted = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    if (array[i] > array[i + 1]) {
      return false;
    }
  }
  return true;
};

const bubbleSort = (input) => {
  const array = input;
  while (!isSorted(array)) {
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
  }
  return array;
};

module.exports = bubbleSort;
