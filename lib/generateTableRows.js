const { generateMultiples } = require('./generateMultiples');

const calculatePadding = array => {
  const flatten = array.flat();

  return flatten.slice(-1)[0].toString().length;
};

const generateTableRows = array => {
  let rows = '';
  const multiples = generateMultiples(array);
  const padding = calculatePadding(multiples);

  multiples.forEach(arr => {
    rows += '|';

    arr.forEach((element, index) => {
        const paddedElement = element.toString().padStart(padding, " ");

        rows += index !== arr.length - 1 ? ` ${paddedElement}|` : ` ${paddedElement}|\n`;
      });
    }
  );
  
  return rows;
};

exports.generateTableRows = generateTableRows;