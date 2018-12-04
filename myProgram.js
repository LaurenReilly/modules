//exercise 1

var require1 = require('./require_statements_1/file1');
var require2 = require('./require_statements_1/file2');
var require3 = require('./require_statements_1/file3');

console.log(require1);
console.log(require2);
console.log(require3);

//exercise 2

var require2_1 = require('./require_statements_2/file1');
var require2_2 = require('./require_statements_2/file2');
var require2_3 = require('./require_statements_2/file2');

console.log(require2_1);
console.log(require2_2);
console.log(require2_3);

//exercise 3

var array = require('./require_statements_3/array');

array.forEach(element => console.log(element));

//exercise 4

var add = require('./require_statements_4/add');

console.log(add(1, 2));
console.log(add(200, 100));
console.log(add(123, 321));

//exercise 5

var dog = require('./require_statements_5/dog');
var cat = require('./require_statements_5/cat');
var random = require('./require_statements_5/randomValue');

console.log(random(dog, cat));