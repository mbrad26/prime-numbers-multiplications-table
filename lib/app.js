const { generateMultiplicationTable } = require('./generateMultiplicationTable');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})

readline.question('Please enter an integer > 0!\n', input => {
  try {
    console.log(generateMultiplicationTable(Number(input)));
  } catch {
    console.log('Input needs to be an integer > 0!\n');
  }
  readline.close();
});
