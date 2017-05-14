var app = angular.module('demo', ['myDirective']);

app.controller('MainCtrl', function ($scope) {

    $scope.Nombre = "111";

    $scope.btnClick = function () {
        $scope.Nombre = "123456789123456789";
    }
});

