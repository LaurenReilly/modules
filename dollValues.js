var doll = require('./russianDoll.js');

Object.getOwnPropertyNames(doll).forEach(key => {
    var values = doll[key];
    console.log(values);
  });