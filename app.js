const express  = require('express'); 
const app = express(); 
const todoController = require('./controllers/TodoController');
//specify view engine
app.set('view engine','ejs');

const todoEngine = todoController (app); 

//set styles directory
app.use('/assets',express.static('public/assets'));


//listen to the port 
app.listen(5000);
