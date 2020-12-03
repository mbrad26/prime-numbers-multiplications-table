const { generateMultiples } = require('./generateMultiples');

let padding;

const calculatePadding = array => {
  const flatten = array.flat();

  return flatten.slice(-1)[0].toString().length;
};

const formatRowsString = (multiples, padding) => {
  let rowsString = '';

  multiples.forEach(arr => {
    rowsString += '|';
    arr.forEach((element, index) => {
        const paddedElement = element.toString().padStart(padding, " ");

        rowsString += index !== arr.length - 1 ? ` ${paddedElement}|` : ` ${paddedElement}|\n`;
      });
    }
  );

  return rowsString;
};

const generateTableRows = array => {
  const multiples = generateMultiples(array);
  padding = calculatePadding(multiples);
  rows = formatRowsString(multiples, padding);
  
  return { rows, padding };
};

exports.generateTableRows = generateTableRows;
