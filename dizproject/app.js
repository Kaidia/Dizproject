//Récupération du package Express et instanciation
var express = require('express');
var app  = express();

//Routing
app.get('/',function(req,res){
    res.send('Bonjour World !');
});

//Définition et vérification du port
var port = process.env.PORT; 
app.listen(port, function(err){
    console.log('server is running on port: '+ port);
});



