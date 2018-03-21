(function (){
    
'use strict';

angular
    .module('myApp', ['auth0.auth0', 'angular-storage', 'angular-jwt', 'ui.router'])
    .config(config);

    config.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider',
        'angularAuth0Provider'
    ];

    function config(
        $stateProvider,
        $locationProvider,
        $urlRouterProvider,
        angularAuth0Provider
    ) {
        $stateProvider
            .state('home', {
                url: '/',
                controller: 'HomeController',
                templateUrl: 'components/home/home.tpl.html'
            })
            .state('profile', {
                url: '/profile',
                controller: 'ProfileController',
                templateUrl: 'components/profile/profile.tpl.html'
            });

        // angular-auth0 library initialization
        angularAuth0Provider.init({
            clientID:  'jp9aFotQ3g3KqGAQ7VkM55u4J7J0Y5Ql',
            domain: 'fuenique.eu.auth0.com',
            responseType: 'token id_token',
            audience: 'https://fuenique.eu.auth0.com/userinfo',
            redirectUri: 'http://localhost:8080/profile',
            scope: 'openid'
        });

        $urlRouterProvider.otherwise('/');

        $locationProvider.hashPrefix('');

        //$locationProvider.html5mode(true);
    }
})();