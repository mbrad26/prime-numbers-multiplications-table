const isPrime = require('../lib/isPrime');

describe('isPrime', () => {
  it('is defined', () => {
    expect(isPrime).toBeDefined();
  });

  it('returns true if argument is 2', () => {
    expect(isPrime(2)).toBe(true);
  });

  it('returns true if argument is 3', () => {
    expect(isPrime(3)).toBe(true);
  })
});