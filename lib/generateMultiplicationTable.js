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

  return multiplicationTable;
};

exports.generateMultiplicationTable = generateMultiplicationTable;