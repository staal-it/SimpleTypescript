/// <reference path="typings/tsd.d.ts" />
var myApp;
(function (myApp) {
    var Routes = (function () {
        function Routes($stateProvider, $urlRouterProvider) {
            this.$stateProvider = $stateProvider;
            this.$urlRouterProvider = $urlRouterProvider;
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
        Routes.$inject = ["$stateProvider", "$urlRouterProvider"];
        return Routes;
    }());
    angular.module('app').config(Routes);
})(myApp || (myApp = {}));
