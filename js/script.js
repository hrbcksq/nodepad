//var parser = 'http://esprima.org/demo/parse.html'
//var site = 'https://learn.javascript.ru/'
var connect = require('connect');
var serveStatic = require('serve-static');
connent().use(serveStatic(__dirname)).listen(8080);

