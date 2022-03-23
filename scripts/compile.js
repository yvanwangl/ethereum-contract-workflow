const fs = require('fs');
const path = require('path');
const solc = require('solc');

const contractPath = path.resolve(__dirname, '../contracts', 'Car.sol');

const contractSource = fs.readFileSync(contractPath, 'utf8');

const result = solc.compile(JSON.stringify({
  language: "Solidity",
  sources: {
    "Car.sol": {
      "content": contractSource
    }
  },
}));

console.log(JSON.stringify(result, null, 2));