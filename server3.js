let express = require('express');
let mysql = require('mysql');
let cors = require('cors');
let bodyParser = require('body-parser');

let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "root",
	database: "abc"
});

const app = express();
app.use(cors());
app.use(bodyParser.json());
insert = (game) => { return new Promise((resolve, reject)=>{ con.query('INSERT INTO boot(kapitein) VALUES (\''+game+'\')',(err, rows)=>{ resolve();})})}

app.post('/opslaan', async(req, res)=>{
	console.log(req.body);
	insert(req.body.kapitein).then(res.send('ok'));
});

checkAlles = () => { return new Promise((resolve, reject)=>{ con.query('SELECT * FROM boot',(err, rows)=>{ resolve(rows);})})}
app.get('/abc',(req,res)=>{ checkAlles().then((results)=>{let html = '';for(let x in results)html+= results[x].kapitein+"<br>"; res.end(html)})});


app.listen(8080);














//checkAlles = () => { return new Promise((resolve, reject)=>{ con.query('SELECT * FROM boot',(err, rows)=>{ resolve(rows);})})}
//app.get('/abc',(req,res)=>{ checkAlles().then((results)=>{let html = '';for(let x in results)html+= results[x].naam+"<br>"; res.end(html)})});
