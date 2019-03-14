var express= require('express');
var todoController= require('./controllers/todoController');

var app = express();

//set up template engine
app.set('view engine','ejs');

//set to use static file
app.use(express.static('./public'));

//fire todoController

todoController(app);

//listen to a port
app.listen(8080);

console.log('you are listening');