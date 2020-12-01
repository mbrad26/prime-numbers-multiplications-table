const generatePrimesArray = require('../lib/generatePrimesArray');
const isPrime = require('../lib/isPrime');

jest.mock('../lib/isPrime');

describe('generatePrimesArray', () => {
  beforeEach(() => {
    isPrime.mockReturnValueOnce(true);
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('is defined', () => {
    expect(generatePrimesArray).toBeDefined();
  });

  it('returns [2] if argument is 1', () => {
    expect(generatePrimesArray(1)).toEqual([2]);
    expect(isPrime).toHaveBeenCalledTimes(1);
    expect(isPrime.mock.calls).toEqual([[2]]);
  });

  it('returns [2, 3] if argument is 2', () => {
    isPrime.mockReturnValueOnce(true);

    expect(generatePrimesArray(2)).toEqual([2, 3]);
    expect(isPrime).toHaveBeenCalledTimes(2);
    expect(isPrime.mock.calls).toEqual([[2],[3]]);
  });

  it('returns [2, 3, 5] if argument is 3', () => {
    isPrime.mockReturnValueOnce(true)
           .mockReturnValueOnce(false)
           .mockReturnValueOnce(true);

    expect(generatePrimesArray(3)).toEqual([2, 3, 5]);
    expect(isPrime).toHaveBeenCalledTimes(4);
    expect(isPrime.mock.calls).toEqual([[2],[3],[4],[5]]);
  });
});
