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
  });
  it('returns false if argument is 4', () => {
    expect(isPrime(4)).toBe(false);
  });

  it('returns false if argument is 6', () => {
    expect(isPrime(6)).toBe(false);
  });

  it('returns false if argument is 8', () => {
    expect(isPrime(8)).toBe(false);
  });
});