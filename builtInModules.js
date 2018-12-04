//1
var os = require('os');
console.log(os.freemem());


//2
var dns = require('dns');
dns.lookup('w3schools.com', function (err, addresses, family) {
  console.log(addresses);

});

//3

setInterval(function () {
    console.log("tic");
    console.log("tock");
}, 1000);