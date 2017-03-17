var express = require('express');
var router = express.Router();

router.get('/produtos', function(req, res, next) {
    req.getConnection(function(err, connection){
        connection.query('SELECT * FROM produtos',[], function(err,result){
            if(err)return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
});

router.post('/produtos/novo', function(req, res, next){
    var data = req.body;
  
    req.getConnection(function(err,connection){
        connection.query('INSERT INTO produtos SET ?', [data], function(err,result){
            if(err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
});

router.post('/produtos/editar', function(req, res, next){
    var data = req.body;
    var id   = data.cod_produto;

    req.getConnection(function(err,connection){
        connection.query('UPDATE produtos SET ? WHERE cod_produto = ? ',[data, id],function(err,result){
            if(err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
});


router.post('/produtos/deletar', function(req, res, next){
    var id = req.body.cod_produto;

    req.getConnection(function(err,connection){
        connection.query('DELETE FROM produtos WHERE cod_produto = ? ',[id],function(err,result){
            if(err) return res.status(400).json(err);

            return res.status(200).json(result);
        });
    });
});

module.exports = router;
