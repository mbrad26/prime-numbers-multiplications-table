const { generateMultiplicationTable } = require('../lib/generateMultiplicationTable');
const { generatePrimesArray } = require('../lib/generatePrimesArray');
const { generateHeader } = require('../lib/generateHeader');
const { generateTableRows } = require('../lib/generateTableRows');

jest.mock('../lib/generatePrimesArray');
jest.mock('../lib/generateHeader');
jest.mock('../lib/generateTableRows');

describe('generateMultiplicationTable', () => {
  it('is defined', () => {
    expect(generateMultiplicationTable).toBeDefined();
  });

  it('generates a multiplication table when input is 1', () => {
    generatePrimesArray.mockReturnValueOnce([2]);
    generateHeader.mockReturnValueOnce('| | 2|');
    generateTableRows.mockReturnValueOnce('| 2| 4|\n')

    expect(generateMultiplicationTable(1)).toEqual('| | 2|\n| 2| 4|\n');
  });
});