const { generateHeader } = require('../lib/generateHeader');

describe.only('generateHeader', () => {
  let padding;

  it('is defined', () => {
    expect(generateHeader).toBeDefined();
  });

  it('returns the correct header when argument is []', () => {
    padding = 0;

    expect(generateHeader([], padding)).toEqual('| |\n');
  });

  it('returns the correct header when argument is an array of length 1', () => {
    padding = 1;

    expect(generateHeader([2], padding)).toEqual('| | 2|\n');
  });

  it('returns the correct header when argument is an array of length 2', () => {
    padding = 1;

    expect(generateHeader([2, 3], padding)).toEqual('| | 2| 3|\n');
  });

  it('returns the correct header when argument is an array of length 7', () => {
    padding = 3;

    expect(generateHeader([2, 3, 5, 7, 11, 13], padding)).toEqual('|   |   2|   3|   5|   7|  11|  13|\n');
  });

  it('returns the header with the correct spacing', () => {
    padding = 2;

    expect(generateHeader([2, 3, 5], padding)).toEqual('|  |  2|  3|  5|\n');
  });
});
