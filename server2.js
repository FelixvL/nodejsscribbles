let express = require('express');
let mysql = require('mysql');
let cors = require('cors')

let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "abc"
});

const app = express();
app.use(cors());

let getEmployeeNames = function () {
	return new Promise(function (resolve, reject) {
		con.query(
			"SELECT * FROM boot",
			function (err, rows) {
				if (rows === undefined) {
					reject(new Error("Error rows is undefined"));
				} else {
					resolve(rows);
				}
			})
	})
}

checkAlles = () => { return new Promise((resolve, reject)=>{ con.query('SELECT * FROM boot',(err, rows)=>{ resolve(rows);})})}
app.get('/abc',(req,res)=>{ checkAlles().then((results)=>{let html = '';for(let x in results)html+= results[x].naam+"<br>"; res.end(html)})});

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