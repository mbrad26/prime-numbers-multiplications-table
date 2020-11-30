const generatePrimesArray = require('../lib/generatePrimesArray');

describe('generatePrimesArray', () => {
  it('is defined', () => {
    expect(generatePrimesArray).toBeDefined();
  });

  it('returns [2] if argument is 1', () => {
    expect(generatePrimesArray(1)).toEqual([2]);
  });
});
