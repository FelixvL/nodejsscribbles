var http = require('http');
var mysql = require('mysql');

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "abc"
});

getEmployeeNames = function () {
	return new Promise(function (resolve, reject) {
		con.query(
			"SELECT * FROM boot",
			function (err, rows) {
				if (rows === undefined) {
					reject(new Error("Error rows is undefined"));
				} else {
					resolve(rows);
				}
			}
		)
	}
	)
}
http.createServer(function (req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	res.setHeader('Content-type', 'text/html');
	getEmployeeNames()
		.then(function (results) {
			html = '';
			for (var i in results) html += "<div>" + results[i].naam + " - " + results[i].kapitein + "</div>";
			res.end(html);
		})
		.catch(function (err) {
			console.log("Promise rejection error: " + err);
			res.end("<h1>ERROR</h1>")
		})
}).listen(8080)
