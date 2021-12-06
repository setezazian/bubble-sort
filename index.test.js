const bubbleSort = require('./index');

describe('Test the implementation of Bubble Sort', () => {
  it('should sort an array', () => {
    expect(bubbleSort([2, 1, 3])).toEqual([1, 2, 3]);
  });

  it('should sort an array', () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });

  it('should return an already sorted array', () => {
    expect(bubbleSort([1, 2, 3])).toEqual([1, 2, 3]);
  });
});
