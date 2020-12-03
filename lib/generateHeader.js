const { padding } = require('./generateTableRows');

const generateHeader = (arr, padding) => {
  let header = `|${" ".padStart(padding, " ")}|`;

  for(let i = 0; i < arr.length; i++) {
    const paddedElement = arr[i].toString().padStart(padding, " ");

    header += ` ${paddedElement}|`;
  };

  return header + '\n';
};

exports.generateHeader = generateHeader;