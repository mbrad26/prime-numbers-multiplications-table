const { generateHeader } = require('../lib/generateHeader');

describe.only('generateHeader', () => {
  it('is defined', () => {
    expect(generateHeader).toBeDefined();
  });

  it('returns the correct header when argument is []', () => {
    expect(generateHeader([])).toEqual("| |");
  });

  it('returns the correct header when argument is an array of length 1', () => {
    expect(generateHeader([2])).toEqual("| | 2|");
  });
});
