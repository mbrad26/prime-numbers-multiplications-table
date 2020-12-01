const { generateHeader } = require('../lib/generateHeader');

describe.only('generateHeader', () => {
  it('is defined', () => {
    expect(generateHeader).toBeDefined();
  });

  it('returns the correct header when argument is []', () => {
    expect(generateHeader([])).toEqual("| |");
  });
});
