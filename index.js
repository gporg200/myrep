const express = require('express')
const app = express();
const port = 3000;

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

var homeuser = 0
var aboutuser = 0


app.get('/', function(req, res){

		res.render('view1');
		homeuser +=1
		console.log(`homepage users: ${homeuser}`)
		});

app.get('/about', function(req, res){
		res.render('about');
		aboutuser += 1
		console.log(`aboutpage users: ${aboutuser}`)
		});

app.listen(port, () => {
		console.log(`http://localhost:${port}`)
		})
