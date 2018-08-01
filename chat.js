var app = angular.module("master", []); 
app.controller("masterCtrl", ['$scope',function($scope) {
    $scope.mensages = [];

    $scope.addToMsg = function(){
        if ($scope.msg != "") {
            $scope.mensages.push($scope.msg);
            $scope.msg = "";
            $("#btn-input").focus();
        }
    };
}]);