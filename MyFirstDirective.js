/// <reference path="typings/tsd.d.ts" />
var myApp;
(function (myApp) {
    var MyFirstDirective = (function () {
        function MyFirstDirective() {
            this.restrict = "AE";
            this.scope = {
                title: '@'
            };
            this.template = '<div>Hallo: {{ title }}</div>';
        }
        return MyFirstDirective;
    }());
    var AttributeDirective = (function () {
        function AttributeDirective() {
            this.restrict = "A";
        }
        AttributeDirective.prototype.link = function ($scope, element, attr) {
            element.bind('click', function () {
                element.html('You clicked me!');
            });
        };
        return AttributeDirective;
    }());
    var IsolatedScopeDirective = (function () {
        function IsolatedScopeDirective() {
            this.template = '<input type="text" ng-model="name" /> Name: {{ name }} <a ng-click="action({name:name})">Click</a>';
            this.scope = {
                name: '@',
                action: '&'
            };
        }
        return IsolatedScopeDirective;
    }());
    var TranscludeDirective = (function () {
        function TranscludeDirective() {
            this.template = '<div style="color:red"><ng-transclude></ng-transclude></div>';
            this.transclude = true;
        }
        return TranscludeDirective;
    }());
    var StarwarsDirective = (function () {
        function StarwarsDirective(starwarsService) {
            this.starwarsService = starwarsService;
            this.scope = {};
            this.template = '<div ng-repeat="movie in movies"><p>{{ movie.title }}</p></div>';
        }
        StarwarsDirective.prototype.link = function ($scope, element, attr) {
            this.starwarsService.getMovies().then(function (data) {
                $scope.movies = data;
            });
        };
        return StarwarsDirective;
    }());
    var Country = (function () {
        function Country() {
            this.scope = {};
            this.restrict = "E";
            this.controller = CountryController;
            this.controllerAs = 'vm';
        }
        return Country;
    }());
    var CountryController = (function () {
        function CountryController() {
        }
        CountryController.prototype.printName = function (name) {
            console.log("Country says: " + name);
        };
        ;
        return CountryController;
    }());
    var City = (function () {
        function City() {
            this.restrict = "E";
            this.require = "^country";
            this.scope = {
                name: "@"
            };
        }
        City.prototype.link = function ($scope, element, attr, countryCtrl) {
            countryCtrl.printName($scope.name);
        };
        return City;
    }());
    angular.module('app').directive('myFirstDirective', function () { return new MyFirstDirective; });
    angular.module('app').directive('attributeDirective', function () { return new AttributeDirective; });
    angular.module('app').directive('isolatedScopeDirective', function () { return new IsolatedScopeDirective; });
    angular.module('app').directive('transcludeDirective', function () { return new TranscludeDirective; });
    angular.module('app').directive('starwarsDirective', function (StarwarsService) { return new StarwarsDirective(StarwarsService); });
    angular.module('app').directive('country', function () { return new Country; });
    angular.module('app').directive('city', function () { return new City; });
})(myApp || (myApp = {}));
