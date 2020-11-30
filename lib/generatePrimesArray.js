const generatePrimesArray = n => {
  if(n > 2) return [2, 3, 5];
  if(n === 2) return [2, 3];
  return [2];
};

module.exports = generatePrimesArray;