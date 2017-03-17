var app = angular.module('app', []);
app.controller("ctrlPrincipal",['$scope','$http', function($scope,$http){
    
    // Chama a função para listar os produtos.
    listarProdutos();
    
    // Carrega os dados para formulário de edição.
    $scope.listaProduto = {};
    $scope.listaInfo = function(produto){
        $scope.listaProduto = produto;
    }      

    // Método para inserir produtos.
    $scope.insereProduto = function(dados){
        $http.post('/produtos/novo',{
                        "nome"      :dados.nome,                        
                        "qtdade"    :dados.qtdade,
                        "descricao" :dados.descricao,
                        "dt_cadastro": dataHoje(),
                        "up_cadastro": dataHoje(),
                        "user": 1
        }).success(function(data){
            if (data.affectedRows == 1) {
                listarProdutos();      
                $('.close').trigger('click');
                $('.form-control').val('');
                
                $('.alert-success').html('Item Cadastrado com sucesso! :)');
                $('.alert-success').removeClass('hidden');

                setTimeout(function(){ 
                    $('.alert-success').html('');
                    $('.alert-success').addClass('hidden');
                }, 4000);
            }
        });
    }

    // Método para alterar produto.
    $scope.alterarProduto = function(dados){
        $http.post('/produtos/editar',{
                    "cod_produto":dados.cod_produto,
                    "nome"       :dados.nome,                   
                    "qtdade"     :dados.qtdade,
                    "descricao"  :dados.descricao,
                    "dt_cadastro": dataHoje(),
                    "up_cadastro": dataHoje(),
                    "user": 1
        }).success(function(data){
            if (data.affectedRows == 1) {                
                listarProdutos();
                
                $('.close').trigger('click');              
                $('.alert-success').html('O item foi alterado com sucesso! :)');
                $('.alert-success').removeClass('hidden');

                setTimeout(function(){ 
                    $('.alert-success').html('');
                    $('.alert-success').addClass('hidden');
                }, 4000);
            }
        });
    }

    // Método para apagar produto.
    $scope.apagarProduto = function(dado){
        $http.post('produtos/deletar', {
                    "cod_produto":dado
            }).success(function(data){
            if (data.affectedRows == 1) {                
                listarProdutos();

                $('.alert-success').html('Item Excluído com sucesso! :)');
                $('.alert-success').removeClass('hidden');

                setTimeout(function(){ 
                    $('.alert-success').html('');
                    $('.alert-success').addClass('hidden');
                }, 4000);
            }
        });
    }

    // Função para lista os produtos.
    function listarProdutos(){    
        $http.get('/produtos').success(function(data){    
            $scope.produtos = data;
        });
    }

    // Função para exibir a data atual.
    function dataHoje() {
        var data = new Date();
        var dia = data.getDate();
        var mes = data.getMonth() + 1;
        var ano = data.getFullYear();
        return [ano, mes, dia].join('-');
    }

}]);