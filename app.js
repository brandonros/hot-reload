var lib = require('./lib');

setInterval(function () {
	console.log(lib.version);
}, 1000);