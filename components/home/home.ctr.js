(function(){
    'use strict';

    angular
        .module('myApp')
        .controller('HomeController', homeController);

        homeController.$inject = ['$scope', 'authService'];

        function homeController($scope, authService) {
            $scope.auth = authService;
        }
})();