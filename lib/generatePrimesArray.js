const isPrime = require('./isPrime');

const generatePrimesArray = n => {
  const primes = [];

  for(let i = 2; primes.length < n; i++) {
    if(isPrime(i)) primes.push(i);
  };

  return primes;
};

module.exports = generatePrimesArray;