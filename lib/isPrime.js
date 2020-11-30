const isPrime = n => {
  if(n > 2 && n % 2 === 0) return false;
  return true;
};

module.exports = isPrime;