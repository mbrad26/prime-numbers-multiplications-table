const { generatePrimesArray }= require('./generatePrimesArray');
const { generateHeader } = require('./generateHeader');
const { generateTableRows } = require('./generateTableRows');

const generateMultiplicationTable = input => {
  let multiplicationTable = '';
  const primes = generatePrimesArray(input);
  const { rows, padding } = generateTableRows(primes);
  const header = generateHeader(primes, padding);
  
  multiplicationTable += header;
  multiplicationTable += rows;

  // console.log('TABLE: ', padding);
  // console.log(multiplicationTable);

  return multiplicationTable;
};

// generateMultiplicationTable(1);
// generateMultiplicationTable(2);
// generateMultiplicationTable(3);
// generateMultiplicationTable(7);
// generateMultiplicationTable(15);

exports.generateMultiplicationTable = generateMultiplicationTable;