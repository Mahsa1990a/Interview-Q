const fs = require('fs');

const print = function(err, data) {
  console.log("Chars: ", data.length);
};

const read = function(fp) {
  fs.readFile(fp, 'utf8', print);
  console.log("readFile called!");
};

console.log("Reading files...");

read('./data1.txt');
console.log("After read(data1)");

read('./data2.txt');
console.log("After read(data2)");