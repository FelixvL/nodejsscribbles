var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	/*Use our upper-case module to upper case a string:*/
  	res.write(uc.upperCase("Hello World!"));
  	res.end();
}).listen(8080);