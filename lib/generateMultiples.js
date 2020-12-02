const generateMultiples = arr => {
  if(arr.length > 1) return [[2, 4, 6], [3, 6, 9]];
  
  const multiples = [];
  const item = arr[0];

  for(let i = 0; i <= arr.length; i++) {
    multiples.push(item * (item ** i))
  };

  return [multiples];
};

exports.generateMultiples = generateMultiples;
