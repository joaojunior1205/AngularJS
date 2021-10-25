'use strict';

angular.module("fichaCadastral", ['ngMask']);
angular.module("fichaCadastral").controller("fichaCtrl", function ($scope, $http){

    $scope.cadastrar = function(ficha){
        if(ficha.nome != null && ficha.cpf != null && ficha.rg != null && ficha.dataNascimento != null && ficha.email != null && ficha.autorizacao != null && ficha.dataEntrada != null && ficha.hora != null && ficha.casa != null && ficha.telefone != null){

            $scope.cadastro.push(angular.copy(ficha));
            delete $scope.ficha;
            window.alert("Cadastro realizado com sucesso!");

            $scope.loading = true;

            $http.post('/sendemail', {
                to: ficha.email,
                subject: 'Message from AngularCode',
                text: 'text',
            }).then(res => {
                $scope.loading = false;
                $scope.serverMessage = 'Email enviado com sucesso';
            })

        }else{
            window.alert("Preencha todos os campos obrigatórios!");
        };
        
    }

    $scope.cadastro = [];

});