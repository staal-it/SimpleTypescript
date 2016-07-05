/// <reference path="typings/tsd.d.ts" />
var myApp;
(function (myApp) {
    var HomeController = (function () {
        function HomeController(starwarsService) {
            var _this = this;
            this.starwarsService = starwarsService;
            this.name = "Hello world!";
            this.title = "Home!";
            this.starwarsService.getMovies().then(function (response) {
                _this.films = response;
            });
        }
        HomeController.prototype.setName = function (name) {
            this.name = name;
        };
        HomeController.$inject = ["StarwarsService"];
        return HomeController;
    }());
    myApp.HomeController = HomeController;
    angular.module("app").controller("HomeController", HomeController);
})(myApp || (myApp = {}));
