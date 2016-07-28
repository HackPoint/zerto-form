var ngApp = angular.module('zerto-app', ['ui.router', 'ngAnimate', 'ngAria', 'ngMaterial', 'ngMessages'])
    .config(function ($stateProvider, $locationProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: true
        });
        $locationProvider.hashPrefix('!');

        $stateProvider
            .state('root', {
                abstract: true,
                template: '<div ui-view></div>'
            })
            .state('/home', {
                url: '/',
                templateUrl: './src/app/views/home/index.html'
            });
    });