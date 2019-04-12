var express = require('express');
var home = require('../app/routes/home')

module.exports = function() {
    var app = express();

    //variaveis de ambiente
    app.set('port', 3000);


    //app.use(app.router); //necessario apenas na versao 3.x

    //middleware
    app.use(express.static('./public')); //recebe a pasta public
    app.set('view engine', 'ejs');
    app.set('views','./app/views'); // onde vai ficar as nossas views

    home(app);

    return app;
}