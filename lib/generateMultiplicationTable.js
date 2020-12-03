const { generatePrimesArray }= require('./generatePrimesArray');
const { generateHeader } = require('./generateHeader');
const { generateTableRows } = require('./generateTableRows');

const generateMultiplicationTable = () => {
  let multiplicationTable = '';
  const primes = generatePrimesArray(1);
  const header = generateHeader(primes);
  const rows = generateTableRows(primes);
  
  multiplicationTable += header;
  multiplicationTable += rows;

  return multiplicationTable;
};

exports.generateMultiplicationTable = generateMultiplicationTable;