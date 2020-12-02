const { generateMultiples } = require('../lib/generateMultiples');

describe('generateMultiples', () => {
  it('is defined', () => {
    expect(generateMultiples).toBeDefined();
  });

  it('returns a nested array of multiples of 2 for [2]', () => {
    expect(generateMultiples([2])).toEqual([[2, 4]]);
  });

  it('returns a nested array of multiples of 2 & 3 for [2, 3]', () => {
    expect(generateMultiples([2, 3])).toEqual([[2, 4, 6], [3, 6, 9]]);
  });
});