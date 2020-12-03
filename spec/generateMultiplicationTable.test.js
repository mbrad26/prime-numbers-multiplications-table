const { generateMultiplicationTable } = require('../lib/generateMultiplicationTable');
const { generatePrimesArray } = require('../lib/generatePrimesArray');
const { generateHeader } = require('../lib/generateHeader');
const { generateTableRows } = require('../lib/generateTableRows');

jest.mock('../lib/generatePrimesArray');
jest.mock('../lib/generateHeader');
jest.mock('../lib/generateTableRows');

describe('generateMultiplicationTable', () => {
  afterEach(() => {
    jest.resetAllMocks()
  });

  it('is defined', () => {
    expect(generateMultiplicationTable).toBeDefined();
  });

  it('generates a multiplication table when input is 1', () => {
    generatePrimesArray.mockReturnValueOnce([2]);
    generateHeader.mockReturnValueOnce('| | 2|\n');
    generateTableRows.mockReturnValueOnce('| 2| 4|\n')

    expect(generateMultiplicationTable(1)).toEqual('| | 2|\n| 2| 4|\n');
    expect(generatePrimesArray).toHaveBeenCalledTimes(1);
    expect(generateHeader).toHaveBeenCalledTimes(1);
    expect(generateTableRows).toHaveBeenCalledTimes(1);
    expect(generatePrimesArray).toHaveBeenCalledWith(1);
    expect(generateHeader).toHaveBeenCalledWith([2]);
    expect(generateTableRows).toHaveBeenCalledWith([2]);
  });

  it('generates a multiplication table when input is 3', () => {
    let array  = [2, 3, 5];
    let header = '|   |  2|  3|  5|\n';
    let rows   = '|  2|  4|  6| 10|\n|  3|  6|  9| 15|\n|  5| 10| 15| 25|\n';
    let result = '|   |  2|  3|  5|\n|  2|  4|  6| 10|\n|  3|  6|  9| 15|\n|  5| 10| 15| 25|\n'

    generatePrimesArray.mockReturnValueOnce(array);
    generateHeader.mockReturnValueOnce(header);
    generateTableRows.mockReturnValueOnce(rows);

    expect(generateMultiplicationTable(3)).toEqual(result);
    expect(generatePrimesArray).toHaveBeenCalledTimes(1);
    expect(generateHeader).toHaveBeenCalledTimes(1);
    expect(generateTableRows).toHaveBeenCalledTimes(1);
    expect(generatePrimesArray).toHaveBeenCalledWith(3);
    expect(generateHeader).toHaveBeenCalledWith([2, 3, 5]);
    expect(generateTableRows).toHaveBeenCalledWith([2, 3, 5]);
  });
});