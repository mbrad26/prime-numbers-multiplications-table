const generatePrimesArray = require('../lib/generatePrimesArray');

describe('generatePrimesArray', () => {
  it('is defined', () => {
    expect(generatePrimesArray).toBeDefined();
  });

  it('returns [2] if argument is 1', () => {
    expect(generatePrimesArray(1)).toEqual([2]);
  });

  it('returns [2, 3] if argument is 2', () => {
    expect(generatePrimesArray(2)).toEqual([2, 3]);
  });

  it('returns [2, 3, 5] if argument is 3', () => {
    expect(generatePrimesArray(3)).toEqual([2, 3, 5]);
  });
});
