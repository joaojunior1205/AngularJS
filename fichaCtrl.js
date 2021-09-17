angular.module("fichaCadastral", []);
angular.module("fichaCadastral").controller("fichaCtrl", function ($scope){

    $scope.lbNome = "Nome";
    $scope.lbCpf = "CPF";
    $scope.lbRg = "RG";
    $scope.lbDataNascimento = "Data Nascimento";
    $scope.lbDescricao = "Descrição";
    $scope.lbTelefone = "Telefone";
    $scope.lbEmail = "E-mail";
    $scope.lbAutorizacaoEntrada = "Autorização";
    $scope.lbVeiculo = "Placa Veiculo";
    $scope.lbDataEntrada = "Data";
    $scope.lbHoraroEntrada = "Hora";
    $scope.lbCasa = "Casa/Apt";

    $scope.cadastrar = function(ficha){

        

        if(ficha.nome != null && ficha.cpf != null && ficha.rg != null && ficha.dataNascimento != null && ficha.email != null && ficha.autorizacao != null && ficha.dataEntrada != null && ficha.hora != null && ficha.casa != null){
            $scope.cadastro.push(angular.copy(ficha));
            delete $scope.ficha;
            window.alert("Cadastro realizado com sucesso!");

        }else{
            window.alert("Preencha todos os campos obrigatórios!");
        };

        
    }

    $scope.cadastro = [];

});