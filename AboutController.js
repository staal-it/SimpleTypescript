/// <reference path="typings/tsd.d.ts" />
var myApp;
(function (myApp) {
    var AboutController = (function () {
        function AboutController() {
            this.title = "About!";
        }
        return AboutController;
    }());
    myApp.AboutController = AboutController;
    angular.module("app").controller("AboutController", AboutController);
})(myApp || (myApp = {}));
