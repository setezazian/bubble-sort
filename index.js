/* jshint expr:true */

const bubbleSort = (input) => {
  const array = input;
  while (true) {
    let sorted = true;
    for (let i = 0; i < array.length; i += 1) {
      if (array[i] > array[i + 1]) {
        sorted = false;
        const temp = array[i];
        array[i] = array[i + 1];
        array[i + 1] = temp;
      }
    }
    if (sorted) {
      break;
    }
  }
  return array;
};

module.exports = bubbleSort;
