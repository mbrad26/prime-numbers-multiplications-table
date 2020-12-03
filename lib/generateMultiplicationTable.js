const { generatePrimesArray }= require('./generatePrimesArray');
const { generateHeader } = require('./generateHeader');
const { generateTableRows } = require('./generateTableRows');

const generateMultiplicationTable = input => {
  let multiplicationTable = '';
  const primes = generatePrimesArray(input);
  const header = generateHeader(primes);
  const rows = generateTableRows(primes);
  
  multiplicationTable += header;
  multiplicationTable += rows;

  console.log(multiplicationTable);
  return multiplicationTable;
};

exports.generateMultiplicationTable = generateMultiplicationTable;