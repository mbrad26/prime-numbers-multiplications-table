const generateMultiples = arr => {
  const multiples = []
  const item = arr[0];

  multiples.push([item, 2 * item]);

  return multiples;
};

exports.generateMultiples = generateMultiples;
