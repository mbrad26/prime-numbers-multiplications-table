const generatePrimesArray = require('../lib/generatePrimesArray');
const isPrime = require('../lib/isPrime');

jest.mock('../lib/isPrime');

describe('generatePrimesArray', () => {
  beforeEach(() => {
    isPrime.mockReturnValueOnce(true);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

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
    isPrime.mockReturnValueOnce(true)
           .mockReturnValueOnce(false)
           .mockReturnValueOnce(true)

    expect(generatePrimesArray(3)).toEqual([2, 3, 5]);
    expect(isPrime).toHaveBeenCalledTimes(4);
  });
});
