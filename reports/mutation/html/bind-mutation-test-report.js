document.querySelector('mutation-test-report-app').report = {"files":{"/Users/student/Desktop/makers/findmypast-tech-test/lib/app.js":{"language":"javascript","mutants":[{"id":"0","location":{"end":{"column":2,"line":5},"start":{"column":54,"line":2}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Survived"},{"id":"4","location":{"end":{"column":4,"line":12},"start":{"column":11,"line":10}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"5","location":{"end":{"column":54,"line":11},"start":{"column":17,"line":11}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"1","location":{"end":{"column":51,"line":7},"start":{"column":19,"line":7}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Survived"},{"id":"3","location":{"end":{"column":4,"line":10},"start":{"column":7,"line":8}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"},{"id":"2","location":{"end":{"column":2,"line":14},"start":{"column":62,"line":7}},"mutatorName":"BlockStatement","replacement":"{}","status":"Survived"}],"source":"const { generateMultiplicationTable } = require('./generateMultiplicationTable');\nconst readline = require('readline').createInterface({\n  input: process.stdin,\n  output: process.stdout\n})\n\nreadline.question('Please enter an integer > 0!\\n', input => {\n  try {\n    console.log(generateMultiplicationTable(Number(input)));\n  } catch {\n    console.log('Input needs to be an integer > 0!\\n');\n  }\n  readline.close();\n});\n"},"/Users/student/Desktop/makers/findmypast-tech-test/lib/generateHeader.js":{"language":"javascript","mutants":[{"id":"6","location":{"end":{"column":2,"line":11},"start":{"column":42,"line":1}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is []"},{"id":"10","location":{"end":{"column":32,"line":4},"start":{"column":18,"line":4}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is an array of length 1"},{"id":"11","location":{"end":{"column":32,"line":4},"start":{"column":18,"line":4}},"mutatorName":"EqualityOperator","replacement":"i <= arr.length","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is []"},{"id":"12","location":{"end":{"column":32,"line":4},"start":{"column":18,"line":4}},"mutatorName":"EqualityOperator","replacement":"i >= arr.length","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is []"},{"id":"9","location":{"end":{"column":46,"line":2},"start":{"column":43,"line":2}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is an array of length 7"},{"id":"7","location":{"end":{"column":50,"line":2},"start":{"column":16,"line":2}},"mutatorName":"StringLiteral","replacement":"``","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is []"},{"id":"8","location":{"end":{"column":24,"line":2},"start":{"column":21,"line":2}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is []"},{"id":"13","location":{"end":{"column":37,"line":4},"start":{"column":34,"line":4}},"mutatorName":"UpdateOperator","replacement":"i--","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is an array of length 1"},{"id":"14","location":{"end":{"column":4,"line":8},"start":{"column":39,"line":4}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is an array of length 1"},{"id":"15","location":{"end":{"column":66,"line":5},"start":{"column":63,"line":5}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is an array of length 7"},{"id":"16","location":{"end":{"column":35,"line":7},"start":{"column":15,"line":7}},"mutatorName":"StringLiteral","replacement":"``","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is an array of length 1"},{"id":"17","location":{"end":{"column":23,"line":10},"start":{"column":10,"line":10}},"mutatorName":"ArithmeticOperator","replacement":"header - '\\n'","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is []"},{"id":"18","location":{"end":{"column":23,"line":10},"start":{"column":19,"line":10}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed","description":"Killed by: generateHeader returns the correct header when argument is []"}],"source":"const generateHeader = (arr, padding) => {\n  let header = `| ${\" \".padStart(padding, \" \")}|`;\n\n  for(let i = 0; i < arr.length; i++) {\n    const paddedElement = arr[i].toString().padStart(padding, \" \");\n\n    header += ` ${paddedElement}|`;\n  };\n\n  return header + '\\n';\n};\n\nexports.generateHeader = generateHeader;"},"/Users/student/Desktop/makers/findmypast-tech-test/lib/generateMultiples.js":{"language":"javascript","mutants":[{"id":"21","location":{"end":{"column":32,"line":4},"start":{"column":18,"line":4}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"19","location":{"end":{"column":2,"line":15},"start":{"column":34,"line":1}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"20","location":{"end":{"column":23,"line":2},"start":{"column":21,"line":2}},"mutatorName":"ArrayDeclaration","replacement":"[\"Stryker was here\"]","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"22","location":{"end":{"column":32,"line":4},"start":{"column":18,"line":4}},"mutatorName":"EqualityOperator","replacement":"i <= arr.length","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"23","location":{"end":{"column":32,"line":4},"start":{"column":18,"line":4}},"mutatorName":"EqualityOperator","replacement":"i >= arr.length","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"25","location":{"end":{"column":4,"line":12},"start":{"column":39,"line":4}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"26","location":{"end":{"column":23,"line":5},"start":{"column":15,"line":5}},"mutatorName":"ArrayDeclaration","replacement":"[]","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"27","location":{"end":{"column":34,"line":7},"start":{"column":20,"line":7}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"28","location":{"end":{"column":34,"line":7},"start":{"column":20,"line":7}},"mutatorName":"EqualityOperator","replacement":"j <= arr.length","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"29","location":{"end":{"column":34,"line":7},"start":{"column":20,"line":7}},"mutatorName":"EqualityOperator","replacement":"j >= arr.length","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"31","location":{"end":{"column":6,"line":9},"start":{"column":41,"line":7}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"32","location":{"end":{"column":31,"line":8},"start":{"column":16,"line":8}},"mutatorName":"ArithmeticOperator","replacement":"arr[i] / arr[j]","status":"Killed","description":"Killed by: generateMultiples returns a nested array of multiples of 2 for [2]"},{"id":"24","location":{"end":{"column":37,"line":4},"start":{"column":34,"line":4}},"mutatorName":"UpdateOperator","replacement":"i--","status":"Timeout"},{"id":"30","location":{"end":{"column":39,"line":7},"start":{"column":36,"line":7}},"mutatorName":"UpdateOperator","replacement":"j--","status":"Timeout"}],"source":"const generateMultiples = arr => {\n  const multiples = [];\n  \n  for(let i = 0; i < arr.length; i++) {\n    let row = [arr[i]];\n\n    for(let j = 0; j < arr.length; j++) {\n      row.push(arr[i] * arr[j]);\n    };\n\n    multiples.push(row);\n  };\n\n  return multiples;\n};\n\nexports.generateMultiples = generateMultiples;\n"},"/Users/student/Desktop/makers/findmypast-tech-test/lib/generateMultiplicationTable.js":{"language":"javascript","mutants":[{"id":"33","location":{"end":{"column":2,"line":15},"start":{"column":46,"line":5}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateMultiplicationTable generates a multiplication table when input is 1"},{"id":"34","location":{"end":{"column":31,"line":6},"start":{"column":29,"line":6}},"mutatorName":"StringLiteral","replacement":"\"Stryker was here!\"","status":"Killed","description":"Killed by: generateMultiplicationTable generates a multiplication table when input is 1"}],"source":"const { generatePrimesArray }= require('./generatePrimesArray');\nconst { generateHeader } = require('./generateHeader');\nconst { generateTableRows } = require('./generateTableRows');\n\nconst generateMultiplicationTable = input => {\n  let multiplicationTable = '';\n  const primes = generatePrimesArray(input);\n  const { rows, padding } = generateTableRows(primes);\n  const header = generateHeader(primes, padding);\n  \n  multiplicationTable += header;\n  multiplicationTable += rows;\n\n  return multiplicationTable;\n};\n\nexports.generateMultiplicationTable = generateMultiplicationTable;"},"/Users/student/Desktop/makers/findmypast-tech-test/lib/generatePrimesArray.js":{"language":"javascript","mutants":[{"id":"35","location":{"end":{"column":2,"line":11},"start":{"column":34,"line":3}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generatePrimesArray returns [2] if argument is 1"},{"id":"36","location":{"end":{"column":20,"line":4},"start":{"column":18,"line":4}},"mutatorName":"ArrayDeclaration","replacement":"[\"Stryker was here\"]","status":"Killed","description":"Killed by: generatePrimesArray returns [2] if argument is 1"},{"id":"37","location":{"end":{"column":35,"line":6},"start":{"column":18,"line":6}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed","description":"Killed by: generatePrimesArray returns [2] if argument is 1"},{"id":"39","location":{"end":{"column":35,"line":6},"start":{"column":18,"line":6}},"mutatorName":"EqualityOperator","replacement":"primes.length >= n","status":"Killed","description":"Killed by: generatePrimesArray returns [2] if argument is 1"},{"id":"40","location":{"end":{"column":40,"line":6},"start":{"column":37,"line":6}},"mutatorName":"UpdateOperator","replacement":"i--","status":"Killed","description":"Killed by: generatePrimesArray returns [2, 3] if argument is 2"},{"id":"42","location":{"end":{"column":18,"line":7},"start":{"column":8,"line":7}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed","description":"Killed by: generatePrimesArray returns [2] if argument is 1"},{"id":"38","location":{"end":{"column":35,"line":6},"start":{"column":18,"line":6}},"mutatorName":"EqualityOperator","replacement":"primes.length <= n","status":"Timeout"},{"id":"41","location":{"end":{"column":4,"line":8},"start":{"column":42,"line":6}},"mutatorName":"BlockStatement","replacement":"{}","status":"Timeout"},{"id":"43","location":{"end":{"column":18,"line":7},"start":{"column":8,"line":7}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Timeout"}],"source":"const isPrime = require('./isPrime');\n\nconst generatePrimesArray = n => {\n  const primes = [];\n\n  for(let i = 2; primes.length < n; i++) {\n    if(isPrime(i)) primes.push(i);\n  };\n\n  return primes;\n};\n\nexports.generatePrimesArray = generatePrimesArray;"},"/Users/student/Desktop/makers/findmypast-tech-test/lib/generateTableRows.js":{"language":"javascript","mutants":[{"id":"44","location":{"end":{"column":2,"line":9},"start":{"column":35,"line":5}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"46","location":{"end":{"column":2,"line":25},"start":{"column":50,"line":11}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"47","location":{"end":{"column":22,"line":12},"start":{"column":20,"line":12}},"mutatorName":"StringLiteral","replacement":"\"Stryker was here!\"","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"48","location":{"end":{"column":6,"line":21},"start":{"column":28,"line":14}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"49","location":{"end":{"column":22,"line":15},"start":{"column":19,"line":15}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"45","location":{"end":{"column":26,"line":8},"start":{"column":24,"line":8}},"mutatorName":"UnaryOperator","replacement":"+1","status":"Killed","description":"Killed by: generateTableRows generates three rows with multiples of 2, 3 & 5 for [2, 3, 5]"},{"id":"51","location":{"end":{"column":71,"line":17},"start":{"column":68,"line":17}},"mutatorName":"StringLiteral","replacement":"\"\"","status":"Killed","description":"Killed by: generateTableRows generates three rows with multiples of 2, 3 & 5 for [2, 3, 5]"},{"id":"52","location":{"end":{"column":47,"line":19},"start":{"column":23,"line":19}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"53","location":{"end":{"column":47,"line":19},"start":{"column":23,"line":19}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"54","location":{"end":{"column":47,"line":19},"start":{"column":23,"line":19}},"mutatorName":"EqualityOperator","replacement":"index === arr.length - 1","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"55","location":{"end":{"column":47,"line":19},"start":{"column":33,"line":19}},"mutatorName":"ArithmeticOperator","replacement":"arr.length + 1","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"56","location":{"end":{"column":70,"line":19},"start":{"column":50,"line":19}},"mutatorName":"StringLiteral","replacement":"``","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"57","location":{"end":{"column":95,"line":19},"start":{"column":73,"line":19}},"mutatorName":"StringLiteral","replacement":"``","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"58","location":{"end":{"column":2,"line":33},"start":{"column":36,"line":27}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"59","location":{"end":{"column":27,"line":32},"start":{"column":10,"line":32}},"mutatorName":"ObjectLiteral","replacement":"{}","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"},{"id":"50","location":{"end":{"column":8,"line":20},"start":{"column":37,"line":16}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: generateTableRows generates a row with multiples of 2 for [2]"}],"source":"const { generateMultiples } = require('./generateMultiples');\n\nlet padding;\n\nconst calculatePadding = array => {\n  const flatten = array.flat();\n\n  return flatten.slice(-1)[0].toString().length;\n};\n\nconst formatRowsString = (multiples, padding) => {\n  let rowsString = '';\n\n  multiples.forEach(arr => {\n    rowsString += '|';\n    arr.forEach((element, index) => {\n        const paddedElement = element.toString().padStart(padding, \" \");\n\n        rowsString += index !== arr.length - 1 ? ` ${paddedElement}|` : ` ${paddedElement}|\\n`;\n      });\n    }\n  );\n\n  return rowsString;\n};\n\nconst generateTableRows = array => {\n  const multiples = generateMultiples(array);\n  padding = calculatePadding(multiples);\n  rows = formatRowsString(multiples, padding);\n  \n  return { rows, padding };\n};\n\nexports.generateTableRows = generateTableRows;\n"},"/Users/student/Desktop/makers/findmypast-tech-test/lib/isPrime.js":{"language":"javascript","mutants":[{"id":"60","location":{"end":{"column":2,"line":6},"start":{"column":22,"line":1}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: isPrime returns true if argument is 2"},{"id":"61","location":{"end":{"column":35,"line":2},"start":{"column":18,"line":2}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed","description":"Killed by: isPrime returns false if argument is 4"},{"id":"62","location":{"end":{"column":35,"line":2},"start":{"column":18,"line":2}},"mutatorName":"EqualityOperator","replacement":"i < Math.sqrt(n)","status":"Killed","description":"Killed by: isPrime returns false if argument is 4"},{"id":"63","location":{"end":{"column":35,"line":2},"start":{"column":18,"line":2}},"mutatorName":"EqualityOperator","replacement":"i > Math.sqrt(n)","status":"Killed","description":"Killed by: isPrime returns true if argument is 2"},{"id":"64","location":{"end":{"column":40,"line":2},"start":{"column":37,"line":2}},"mutatorName":"UpdateOperator","replacement":"i--","status":"Killed","description":"Killed by: isPrime returns true if argument is 1,299,827"},{"id":"66","location":{"end":{"column":19,"line":3},"start":{"column":8,"line":3}},"mutatorName":"ConditionalExpression","replacement":"true","status":"Killed","description":"Killed by: isPrime returns true if argument is 1,299,827"},{"id":"67","location":{"end":{"column":19,"line":3},"start":{"column":8,"line":3}},"mutatorName":"ConditionalExpression","replacement":"false","status":"Killed","description":"Killed by: isPrime returns false if argument is 4"},{"id":"68","location":{"end":{"column":19,"line":3},"start":{"column":8,"line":3}},"mutatorName":"EqualityOperator","replacement":"n % i !== 0","status":"Killed","description":"Killed by: isPrime returns false if argument is 4"},{"id":"69","location":{"end":{"column":13,"line":3},"start":{"column":8,"line":3}},"mutatorName":"ArithmeticOperator","replacement":"n * i","status":"Killed","description":"Killed by: isPrime returns false if argument is 4"},{"id":"71","location":{"end":{"column":14,"line":5},"start":{"column":10,"line":5}},"mutatorName":"BooleanLiteral","replacement":"false","status":"Killed","description":"Killed by: isPrime returns true if argument is 2"},{"id":"70","location":{"end":{"column":33,"line":3},"start":{"column":28,"line":3}},"mutatorName":"BooleanLiteral","replacement":"true","status":"Killed","description":"Killed by: isPrime returns false if argument is 4"},{"id":"65","location":{"end":{"column":4,"line":4},"start":{"column":42,"line":2}},"mutatorName":"BlockStatement","replacement":"{}","status":"Killed","description":"Killed by: isPrime returns false if argument is 4"}],"source":"const isPrime = n => {\n  for(let i = 2; i <= Math.sqrt(n); i++) {\n    if(n % i === 0) return false;\n  };\n  return true;\n};\n\nmodule.exports = isPrime;"}},"schemaVersion":"1.0","thresholds":{"high":80,"low":60,"break":null}};