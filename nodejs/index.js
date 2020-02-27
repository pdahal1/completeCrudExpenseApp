const express = require('express'); 
const bodyParser = require('body-parser'); 
const cors = require('cors');
const { mongoose } = require('./db.js');
var expenseController = require('./controllers/expenseController.js');
//var userController = require('./controllers/userController.js');
var app = express(); 
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:4200' }));
app.listen(3001, () => console.log('app fired up at port 3000 ok'));
app.use('/expenses', expenseController);
// app.use('/users', userController);

//
