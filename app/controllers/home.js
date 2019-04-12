var controller = require('../controllers/home');

module.exports = function() {
    var controller = {};
    controller.index = function(req, res){
        //a view ainda nao ta pronta: tem que ser renderizada
        res.render('index', {nome: 'Express App'}); //obj com as vars que a view vai consumir
    };
    return controller;
}

module.exports = function(app) {
    app.get('/index', controller.index);
    app.get('/', controller.index);
}