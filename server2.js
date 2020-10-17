var express = require('express');
var mysql = require('mysql');
var cors = require('cors')

var con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "abc"
});

const app = express();
app.use(cors());


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

app.get( '/', (req, res) => {
	res.send('yep it is');
});

app.get( '/uitdb' , (req, res) => {
	
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

});

app.listen(8080);