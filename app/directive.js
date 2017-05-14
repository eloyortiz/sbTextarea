var myDirective = angular.module('myDirective', []);

var sbTextarea = function () {

    var directiva = {};

    var restrict = "E";
    var templateUrl = '/app/templates/sbTextarea.html';
    
    var scope = {
        Contenido: "=?contenido",
        Longitud: "=longitud",
        Limitacion: "=limitacion",
        Altura: "=altura",
        
    };

    var replace = true;
    var link = function ($scope, $element, $attr) {
        if($scope.Limitacion){
            var value = $scope.Longitud;
            $element.find('textarea')[0].setAttribute("maxlength", value);
        }
    }

    directiva.restrict = restrict;
    directiva.templateUrl = templateUrl;
    directiva.scope = scope;
    directiva.replace = replace;
    directiva.link = link;

    return directiva;
}

myDirective.directive('sbTextarea', sbTextarea);