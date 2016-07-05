var myApp;
(function (myApp) {
    /**
    * StarwarsService
    */
    var StarwarsService = (function () {
        function StarwarsService($http) {
            this.$http = $http;
        }
        StarwarsService.prototype.getMovies = function () {
            return this.$http.get("http://swapi.co/api/films/").then(function (response) {
                return response.data.results;
            });
        };
        StarwarsService.$inject = ["$http"];
        return StarwarsService;
    }());
    myApp.StarwarsService = StarwarsService;
    var Movie = (function () {
        function Movie() {
        }
        return Movie;
    }());
    myApp.Movie = Movie;
    angular.module("app").service("StarwarsService", StarwarsService);
})(myApp || (myApp = {}));
