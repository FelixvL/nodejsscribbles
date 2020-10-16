var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "abc"
  });


var uc = require('upper-case');
http.createServer(function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	res.write(hetWoordOpmaken(req.url));
  	res.end();
}).listen(8080);

function hetWoordOpmaken(deurl){
	con.connect(function(err) {
		if (err) throw err;
		console.log("Connected!");
		var sql = "SELECT * FROM boot";
		con.query(sql, function (err, result) {
		  if (err) throw err;
		  console.log("sql done");
		  console.log(JSON.stringify(result));
		});
	});
	return "denk connected";
}
