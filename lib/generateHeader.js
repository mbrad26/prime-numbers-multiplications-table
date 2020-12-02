const generateHeader = arr => {
  let header = '| |';

  for(let i = 0; i < arr.length; i++) {
    header += ` ${arr[i]}|`;
  };

  return header;
};

exports.generateHeader = generateHeader;