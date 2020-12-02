const { generateMultiples } = require('../lib/generateMultiples');

describe('generateMultiples', () => {
  it('is defined', () => {
    expect(generateMultiples).toBeDefined();
  });

  it('returns a nested array of multiples of 2 for [2]', () => {
    expect(generateMultiples([2])).toEqual([[2, 4]]);
  });
});