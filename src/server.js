const express = require('express');
const path = require('path');

// Init
const app = express();

// Settings 
app.set('port', process.env.PORT || 4000 );
app.set('views', path.join(__dirname,'views'));

// Middlewares 
app.use(express.urlencoded({extended: false})); 

// Global Variables

// Routes
app.get('/', (req,res) => {
    res.send("<h3>Hola Mundo</h3>")
})

// Statics files 
app.use(express.static(path.join(__dirname, 'public')));
module.exports = app;