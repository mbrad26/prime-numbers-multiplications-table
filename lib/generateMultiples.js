const generateMultiples = arr => {
  const multiples = [];
  
  for(let i = 0; i < arr.length; i++) {
    let row = [arr[i]];

    for(let j = 0; j < arr.length; j++) {
      row.push(arr[i] * arr[j]);
    };

    multiples.push(row);
  };

  return multiples;
};

exports.generateMultiples = generateMultiples;
