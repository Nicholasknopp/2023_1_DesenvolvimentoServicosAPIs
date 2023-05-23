const restify = require("restify");
const errors = require("restify-errors");

const server = restify.createServer({
    name : 'loja' ,
    version : '1.0.0'
});

server.use(restify.plugins.acceptParser(server.acceptable));
server.use(restify.plugins.queryParser());
server.use(restify.plugins.bodyParser());

server.listen( 8002, function(){
    console.log("%s executando em http://localhost:8001 (%s)", server.name, server.url);
});

var knex = require('knex')({
    client : 'mysql' ,
    connection : {
        host : '127.0.0.1' ,
        user : 'root' ,
        password : '' ,
        database : 'loja_dsapi'
    }
});

server.get( '/' , (req, res, next) => {
    res.send('Bem-vindo(a) à API loja!');
});

server.get('/cidades', (req, res, next) => {
    knex('cidades').then((dados) => {
        res.send(dados);
    }, next)
});

server.get('/cidades/:idCidades', (req, res, next) => {
    idCity = req.params.idCidades;
    knex('cidades')
        .where('id', idCity)
        .first()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Esta cidade não foi encontrada'));
            }
            res.send(dados);
        }, next);
});

server.post('/cidades', (req, res, next) => {
    knex('cidades')
        .insert(req.body)
        .then((dados) => {
            res.send("Cidade ensirida com sucesso");
        }, next);
});

server.put('/clientes/idClientes', (req, res, next) => {
    idClient = req.params.idClientes;
    knex('clientes')
        .where('id', idClient)
        .update(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este cliente não foi encontrado'));
            }
            res.send("Cidade atualizada com sucesso");
        }, next);
});

server.del('/cidades/:idCidades', (req, res, next) => {
    idCity = req.params.idCidades;
    knex('clientes')
        .where('id', idCity)
        .delete()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este cliente não foi encontrado'));
            }
            res.send("Cidade excluida com sucesso");
        }, next);
});


server.get('/clientes/:idClientes', (req, res, next) => {
    idClient = req.params.idClientes;
    knex('clientes')
        .where('id', idClient)
        .first()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este cliente não foi encontrado'));
            }
            res.send(dados);
        }, next);
});

server.get('/clientes', (req, res, next) => {
    knex('clientes').then((dados) => {
        res.send(dados);
    }, next)
});

server.post('/clientes', (req, res, next) => {
    knex('clientes')
        .insert(req.body)
        .then((dados) => {
            res.send("Cliente ensirido com sucesso");
        }, next);
});

server.put('/clientes/idClientes', (req, res, next) => {
    idClient = req.params.idClientes;
    knex('clientes')
        .where('id', idClient)
        .update(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este cliente não foi encontrado'));
            }
            res.send("Cliente atualizado com sucesso");
        }, next);
});

server.del('/clientes/:idClientes', (req, res, next) => {
    idClient = req.params.idClientes;
    knex('clientes')
        .where('id', idClient)
        .delete()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este cliente não foi encontrado'));
            }
            res.send("Cliente excluido com sucesso");
        }, next);
});


server.get('/pedidos', (req, res, next) => {
    knex('pedidos').then((dados) => {
        res.send(dados);
    }, next)
});

server.get('/pedidos/:idPedidos', (req, res, next) => {
    idPed = req.params.idPedidos;
    knex('pedidos')
        .where('id', idPed)
        .first()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este pedido não foi encontrado'));
            }
            res.send(dados);
        }, next);
});

server.post('/pedidos', (req, res, next) => {
    knex('pedidos')
        .insert(req.body)
        .then((dados) => {
            res.send("Pedido ensirido com sucesso");
        }, next);
});

server.put('/pedidos/:idPedidos', (req, res, next) => {
    idPed = req.params.idPedidos;
    knex('pedidos')
        .where('id', idPed)
        .update(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este pedido não foi encontrado'));
            }
            res.send("Pedido atualizado com sucesso");
        }, next);
});

server.del('/pedidos/:idPedidos', (req, res, next) => {
    idPed = req.params.idPedidos;
    knex('pedidos')
        .where('id', idPed)
        .delete()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este pedido não foi encontrado'));
            }
            res.send("Pedido excluido com sucesso");
        }, next);
});

server.get('/categorias', (req, res, next) => {
    knex('categorias').then((dados) => {
        res.send(dados);
    }, next)
});

server.get('/categorias/:idCategorias', (req, res, next) => {
    idCatg = req.params.idCategorias;
    knex('categorias')
        .where('id', idCatg)
        .first()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Esta categoria não foi encontrada'));
            }
            res.send(dados);
        }, next);
});

server.post('/categorias', (req, res, next) => {
    knex('categorias')
        .insert(req.body)
        .then((dados) => {
            res.send("Categoria ensirida com sucesso");
        }, next);
});

server.put('/categorias/:idCategorias', (req, res, next) => {
    idCatg = req.params.idCategorias;
    knex('categorias')
        .where('id', idCatg)
        .update(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Esta categoria não foi encontrada'));
            }
            res.send("Categoria Atualizada com sucesso");
        }, next);
});

server.del('/categorias/:idCategorias', (req, res, next) => {
    idCatg = req.params.idCategorias;
    knex('categorias')
        .where('id', idCatg)
        .delete()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Esta categoria não foi encontrada'));
            }
            res.send("Categoria excluida com sucesso");
        }, next);
});

server.get('/produtos/:idProdutos', (req, res, next) => {
    idProd = req.params.idProdutos;
    knex('produtos')
        .where('id', idProd)
        .first()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este produto não foi encontrado'));
            }
            res.send(dados);
        }, next);
});

server.post('/produtos', (req, res, next) => {
    knex('produtos')
        .insert(req.body)
        .then((dados) => {
            res.send("Produto ensirido com sucesso");
        }, next);
});

server.put('/produtos/:idProduto', (req, res, next) => {
    idProd = req.params.idProduto;
    knex('produtos')
        .where('id', idProd)
        .update(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este produto não foi encontrado'));
            }
            res.send("Produto atualizado com sucesso");
        }, next);
});

server.del('/produtos/:idProdutos', (req, res, next) => {
    idProd = req.params.idProdutos;
    knex('produtos')
        .where('id', idProd)
        .delete()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este produto não foi encontrado'));
            }
            res.send("Este produto foi apagado");
        }, next);
});

server.get('/produtos', (req, res, next) => {
    knex('produtos').then((dados) => {
        res.send(dados);
    }, next)
});

server.get('/pedidos_produtos', (req, res, next) => {
    knex('pedidos_produtos').then((dados) => {
        res.send(dados);
    }, next)
});

server.get('/pedidos_produtos/:idPedidos_Produtos', (req, res, next) => {
    idProd_Ped = req.params.idPedidos_Produtos;
    knex('pedidos_produtos')
        .where('id', idPedidos_Produtos)
        .first()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este produto não foi encontrado'));
            }
            res.send(dados);
        }, next);
});

server.post('/pedidos_produtos', (req, res, next) => {
    knex('pedidos_produtos')
        .insert(req.body)
        .then((dados) => {
            res.send("Pedido de Produto ensirido com sucesso");
        }, next);
});

server.put('/pedidos_produtos/:idPedidos_Produtos', (req, res, next) => {
    idProd_Ped = req.params.idPedidos_Produtos;
    knex('pedidos_produtos')
        .where('id', idProd_Ped)
        .update(req.body)
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este pedido de produto não foi encontrado'));
            }
            res.send("Pedido de Produto atualizado com sucesso");
        }, next);
});

server.del('/pedidos_produtos/:idPedidos_Produtos', (req, res, next) => {
    idProd_Ped = req.params.idPedidos_Produtos;
    knex('pedidos_produtos')
        .where('id', idProd_Ped)
        .delete()
        .then((dados) => {
            if (!dados) {
                return res.send(new errors.BadRequestError('Este pedido de produto não foi encontrado'));
            }
            res.send("Pedido de Produto apagado com sucesso");
        }, next);
});