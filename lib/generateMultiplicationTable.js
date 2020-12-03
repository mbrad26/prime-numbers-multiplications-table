const { generatePrimesArray }= require('./generatePrimesArray');
const { generateHeader } = require('./generateHeader');
const { generateTableRows } = require('./generateTableRows');

const generateMultiplicationTable = input => {
  if(input < 1) return console.log('Please input an integer > 0!');

  let multiplicationTable = '';
  const primes = generatePrimesArray(input);
  const { rows, padding } = generateTableRows(primes);
  const header = generateHeader(primes, padding);
  
  multiplicationTable += header;
  multiplicationTable += rows;

  console.log(multiplicationTable);
  return multiplicationTable;
};

// generateMultiplicationTable(0);
// generateMultiplicationTable(2);
// generateMultiplicationTable(3);
// generateMultiplicationTable(7);
// generateMultiplicationTable(15);

exports.generateMultiplicationTable = generateMultiplicationTable;