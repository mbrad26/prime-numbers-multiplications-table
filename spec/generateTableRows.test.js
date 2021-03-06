const { generateTableRows } = require('../lib/generateTableRows');
const { generateMultiples } = require('../lib/generateMultiples');

jest.mock('../lib/generateMultiples');

describe.only('generateTableRows', () => {
  afterEach(() => {
    jest.resetAllMocks()
  });

  it('is defined', () => {
    expect(generateTableRows).toBeDefined();
  });

  it('generates a row with multiples of 2 for [2]', () => {
    const array = [2];
    const padding = 1;
    const rows = '| 2| 4|\n';

    generateMultiples.mockReturnValueOnce([[2, 4]]);

    expect(generateTableRows(array)).toEqual({ rows, padding });
    expect(generateMultiples).toHaveBeenCalledTimes(1);
    expect(generateMultiples).toHaveBeenCalledWith([2]);
  });

  it('adds new line after each row', () => {
    const array = [2];
    const padding = 1;
    const rows = '| 2| 4|\n';

    generateMultiples.mockReturnValueOnce([[2, 4]]);

    expect(generateTableRows(array)).toEqual({ rows, padding });
  });

  it('generates two rows with multiples of 2 & 3 for [2, 3]', () => {
    const array = [2, 3];
    const padding = 1;
    const rows = '| 2| 4| 6|\n| 3| 6| 9|\n';

    generateMultiples.mockReturnValueOnce([[2, 4, 6], [3, 6, 9]]);

    expect(generateTableRows(array)).toEqual({ rows, padding });
    expect(generateMultiples).toHaveBeenCalledTimes(1);
    expect(generateMultiples).toHaveBeenCalledWith([2, 3]);
  });

  it('generates three rows with multiples of 2, 3 & 5 for [2, 3, 5]', () => {
    const array = [2, 3, 5];
    const padding = 2;
    const rows = '|  2|  4|  6| 10|\n|  3|  6|  9| 15|\n|  5| 10| 15| 25|\n';

    generateMultiples.mockReturnValueOnce([[2, 4, 6, 10], [3, 6, 9, 15], [5, 10, 15, 25]]);

    expect(generateTableRows(array)).toEqual({ rows, padding });
    expect(generateMultiples).toHaveBeenCalledTimes(1);
    expect(generateMultiples).toHaveBeenCalledWith([2, 3, 5]);
  });
});