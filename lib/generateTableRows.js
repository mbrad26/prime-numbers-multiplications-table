const generateTableRows = (array, generateMultiples) => {
  let rows = '';
  const multiples = generateMultiples(array);

  multiples.forEach(arr => {
    rows += '|';
    arr.forEach((element, index) => {
        rows += index !== arr.length - 1 ? ` ${element}|` : ` ${element}|\n`;
      });
    }
  );
  
  return rows;
};

exports.generateTableRows = generateTableRows;