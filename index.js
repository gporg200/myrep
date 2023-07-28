const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));
app.set('view engine', 'pug');
app.set('views','./views');

app.get('/', function(req, res){
   res.render('view1');
});

app.get('/about', function(req, res){
   res.render('about');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
