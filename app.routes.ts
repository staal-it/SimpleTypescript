/// <reference path="typings/tsd.d.ts" />

module myApp {
    
    class Routes {
        static $inject = ["$stateProvider", "$urlRouterProvider"]
        constructor(private $stateProvider: angular.ui.IStateProvider, private $urlRouterProvider: angular.ui.IUrlRouterProvider){
            
            $urlRouterProvider.otherwise('/home');
            
            $stateProvider
            .state('home', {
                url: '/home',
                controller: 'HomeController',
                controllerAs: 'vm',
                templateUrl: 'home.html'
            })
            .state('about', {
                url: '/about',
                controller: 'AboutController',
                controllerAs: 'vm',
                templateUrl: 'about.html'
            });
        }
    }
    
    angular.module('app').config(Routes);
}