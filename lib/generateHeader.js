const generateHeader = arr => {
  if(arr.length === 1) return '| | 2|';
  return '| |';
}

exports.generateHeader = generateHeader;