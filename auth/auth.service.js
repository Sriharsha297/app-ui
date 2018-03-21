(function (){
    'use strict';

    angular
        .module('myApp')
        .service('authService', authService);

        authService.$inject = ['$state', 'angularAuth0', '$timeout'];

        function authService($state, angularAuth0, $timeout) {
            function login() {
                angularAuth0.authorize();
            }

            return {
                login: login
            }
        }
})();