var lib = require('./lib');

function reload(module) {
	delete require.cache[require.resolve(module)];
	return require(module);
}

setInterval(function () {
	console.log(lib.version);
}, 1000);

process.on('SIGUSR2', function () {
	lib = reload('./lib');
});