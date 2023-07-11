const restify = require("restify");
const errors = require("restify-errors");
const corsMiddleware = require("restify-cors-middleware2");

const cors = corsMiddleware({
    origins: ['*']
});

const servidor = restify.createServer({
    name : 'lista_chamada' ,
    version : '1.0.0'
});

servidor.use(restify.plugins.acceptParser(servidor.acceptable));
servidor.use(restify.plugins.queryParser());
servidor.use(restify.plugins.bodyParser());

servidor.pre( cors.preflight );
servidor.use( cors.actual );

servidor.listen( 8001, function(){
    console.log("%s executando em %s", servidor.name, servidor.url);
});

var knex = require('knex')({
    client : 'mysql' ,
    connection : {
        host : 'localhost' ,
        user : 'root' ,
        password : '' ,
        database : 'lista_chamada'
    }
});

servidor.get( '/' , (req, res, next) => {
    res.send('Bem-vindo(a) à API Chamada!');
});

servidor.get( '/chamada' , (req, res, next) => {
    knex('chamada').then( (dados) =>{
        res.send( dados );
    }, next) ;
});

servidor.get( '/pessoa' , (req, res, next) => {
    knex('pessoa').then( (dados) =>{
        res.send( dados );
    }, next) ;
});

servidor.get( '/chamada/:idCham' , (req, res, next) => {
    const idChamada = req.params.idCham;
    knex('chamada')
    .where('id' , idChamada)
    .first()
    .then( (dados) =>{
        if( !dados ){
            return res.send(new errors.BadRequestError('Aluno não encontrado'));
        }
        res.send( dados );
    }, next);
});

servidor.get( '/pessoa/:idPess' , (req, res, next) => {
    const idPessoa = req.params.idPess;
    knex('pessoa')
    .where('id_pessoa' , idPessoa)
    .first()
    .then( (dados) =>{
        if( !dados ){
            return res.send(new errors.BadRequestError('Aluno não encontrado'));
        }
        res.send( dados );
    }, next);
});

servidor.post( '/chamada' , (req, res, next) => {
    knex('chamada')
    .insert( req.body )
    .then( (dados) =>{
        res.send( dados );
    }, next) ;
});

servidor.post( '/pessoa' , (req, res, next) => {
    knex('pessoa')
    .insert( req.body )
    .then( (dados) =>{
        res.send( dados );
    }, next) ;
});

servidor.put( '/chamada/:idCham' , (req, res, next) => {
    const idChamada = req.params.idCham;
    knex('chamada')
    .where('id' , idChamada)
    .update( req.body )
    .then( (dados) =>{
        if( !dados ){
            return res.send( new errors.BadRequestError('Aluno não encontrado'));
        }
        res.send( "Chamada Atualizada" );
    }, next);
});

servidor.put( '/pessoa/:idPess' , (req, res, next) => {
    const idPessoa = req.params.idPess;
    knex('pessoa')
    .where('id_pessoa' , idPessoa)
    .update( req.body )
    .then( (dados) =>{
        if( !dados ){
            return res.send( new errors.BadRequestError('Aluno não encontrado'));
        }
        res.send( "Pessoa Atualizada" );
    }, next);
});

servidor.del( '/chamada/:idCham' , (req, res, next) => {
    const idChamada = req.params.idCham;
    knex('chamada')
    .where('id' , idChamada)
    .delete()
    .then( (dados) =>{
        if( !dados ){
            return res.send(new errors.BadRequestError('Aluno não encontrado'));
        }
        res.send( "Registro Deletado");
    }, next);
});

servidor.del( '/pessoa/:idPess' , (req, res, next) => {
    const idPessoa = req.params.idPess;
    knex('pessoa')
    .where('id' , idPessoa)
    .delete()
    .then( (dados) =>{
        if( !dados ){
            return res.send(new errors.BadRequestError('Aluno não encontrado'));
        }
        res.send( "Registro Deletado");
    }, next);
});