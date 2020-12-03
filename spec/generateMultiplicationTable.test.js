const { generateMultiplicationTable } = require('../lib/generateMultiplicationTable');

describe('generateMultiplicationTable', () => {
  it('is defined', () => {
    expect(generateMultiplicationTable).toBeDefined();
  });

  it('generates a multiplication table when input is 1', () => {
    expect(generateMultiplicationTable(1)).toEqual('| | 2|\n| 2| 4|\n');
  });
});