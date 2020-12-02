const generateMultiples = arr => {
  const multiples = [];
  const item = arr[0];

  for(let i = 0; i <= arr.length; i++) {
    multiples.push(item * (item ** i))
  };

  return [multiples];
};

exports.generateMultiples = generateMultiples;
