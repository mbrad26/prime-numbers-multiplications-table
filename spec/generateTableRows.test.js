const { generateTableRows } = require('../lib/generateTableRows');

describe.only('generateTableRows', () => {
  it('is defined', () => {
    expect(generateTableRows).toBeDefined();
  });

  it('generates a row of multiples of 2 for a nested array of size 1', () => {
    const array = [2];

    expect(generateTableRows(array)).toEqual('| 2| 4|');
  });
});