const { generateTableRows } = require('../lib/generateTableRows');

describe.only('generateTableRows', () => {
  let generateMultiples;

  beforeEach(() => {
    generateMultiples = jest.fn();
  });

  it('is defined', () => {
    expect(generateTableRows).toBeDefined();
  });

  it('generates a row of multiples of 2 for [2]', () => {
    const array = [2];
    generateMultiples.mockReturnValueOnce([[2, 4]]);

    expect(generateTableRows(array, generateMultiples)).toEqual('| 2| 4|\n');
    expect(generateMultiples).toHaveBeenCalledTimes(1);
    expect(generateMultiples).toHaveBeenCalledWith([2]);
  });

  it('adds new line after each row', () => {
    const array = [2];
    generateMultiples.mockReturnValueOnce([[2, 4]]);

    expect(generateTableRows(array, generateMultiples)).toEqual('| 2| 4|\n');
  });
});