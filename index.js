let express = require('express');
let mongoose = require('mongoose'); 

const PORT = process.env.PORT || 3000; 

let app = express();

// View Engine
app.set('view engine', 'ejs');

// Public Assets
app.use(express.static('assets'));

// Routes
app.get('/', function(req, res){
    res.render('index');
});

app.listen(PORT, function(){
    console.log(`Listening on port: ${PORT}`); 
});