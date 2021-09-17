angular.module("fichaCadastral", ['ngMask']);
angular.module("fichaCadastral").controller("fichaCtrl", ["$scope", function ($scope){

    $scope.cadastrar = function(ficha){

        if(ficha.nome != null && ficha.cpf != null && ficha.rg != null && ficha.dataNascimento != null && ficha.email != null && ficha.autorizacao != null && ficha.dataEntrada != null && ficha.hora != null && ficha.casa != null && ficha.telefone != null){
            $scope.cadastro.push(angular.copy(ficha));
            delete $scope.ficha;
            window.alert("Cadastro realizado com sucesso!");

        }else{
            window.alert("Preencha todos os campos obrigatórios!");
        };

        
    }

    $scope.cadastro = [];

}]);