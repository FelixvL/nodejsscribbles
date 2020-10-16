var http = require('http');
var uc = require('upper-case');
http.createServer(function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	res.write(hetWoordOpmaken(req.url));
  	res.end();
}).listen(8080);

function hetWoordOpmaken(deurl){
	return "dit is het antwoord"+deurl;
}