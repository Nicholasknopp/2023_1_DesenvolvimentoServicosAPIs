const restify = require("restify");
const errors = require("restify-errors");

const server = restify.createServer({
    name : 'loja' ,
    version : '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen( 8001, function(){
    console.log("executando em http://localhost:8001 ", server.name, server.url);
});

var knex = require('knex')({
    client : 'mysql' ,
    connection : {
        host : 'localhost' ,
        user : 'root' ,
        password : '' ,
        database : 'loja'
    }
});

server.get( '/' , (req, res, next) => {
    res.send('Bem-vindo(a) à API loja!');
});



