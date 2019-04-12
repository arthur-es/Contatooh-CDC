var express = require('express');
var load = require('express-load');
//var home = require('../app/routes/home')
var app = express();

module.exports = function() {

    //variaveis de ambiente
    app.set('port', 3000);

    //app.use(app.router); //necessario apenas na versao 3.x

    //middleware
    app.use(express.static('./public')); //recebe a pasta public
    app.set('view engine', 'ejs');
    app.set('views','./app/views'); // onde vai ficar as nossas views

    //home(app); old
    //vai carregar todos os scripts na pasta models, e controllers e routes
    //esse cwd faz com que procure no diretorio: contatooh/app .
    load('models', {cwd: 'app'}).then('controllers').then('routes').into(app);
    return app;
}

/*
Um ponto importante é que precisamos carregar as pastas
seguindo a ordem models, controllers e routes.
*/