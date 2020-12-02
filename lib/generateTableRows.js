const generateTableRows = (array, generateMultiples) => {
  let row = '|';
  const multiples = generateMultiples(array);

  multiples.forEach(arr => arr.forEach(element => row += ` ${element}|`));
  
  return row;
};

exports.generateTableRows = generateTableRows;