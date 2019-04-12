var http = require('http'); //responsável por subir o server
var app = require('./config/express')(); //o retorno é uma função, 
                                        //entao usou os parenteses para já executa-lo

http.createServer(app).listen(app.get('port'), function(){
    console.log('Express server escurtando na porta ' + app.get('port'));
});

