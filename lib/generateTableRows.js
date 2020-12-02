const generateTableRows = (array, generateMultiples) => {
  let row = '|';
  const multiples = generateMultiples(array);

  multiples.forEach(arr => arr.forEach((element, index) => {
        row += index !== arr.length - 1 ? ` ${element}|` : ` ${element}|\n`;
      }));
  
  return row;
};

exports.generateTableRows = generateTableRows;