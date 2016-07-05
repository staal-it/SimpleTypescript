/// <reference path="typings/tsd.d.ts" />

module myApp {
     
    class MyFirstDirective implements angular.IDirective {
        
        restrict = "AE"
        scope = {
            title: '@'
        }
        
        template = '<div>Hallo: {{ title }}</div>'
    }
    
    class AttributeDirective implements angular.IDirective {
        
        restrict = "A";
        
        link($scope: angular.IScope, element: angular.IAugmentedJQuery, attr: angular.IAttributes) {
            element.bind('click', () => {
                element.html('You clicked me!');
            })
        }
    }
    

    class IsolatedScopeDirective implements angular.IDirective {
        template = '<input type="text" ng-model="name" /> Name: {{ name }} <a ng-click="action({name:name})">Click</a>';
        
        scope = {
            name: '@',
            action: '&'
        }
    }
    
    class TranscludeDirective implements angular.IDirective {
        template = '<div style="color:red"><ng-transclude></ng-transclude></div>';
        transclude = true;
    }
    
    interface StarWarsDirectiveScope extends angular.IScope {
        movies: Movie[];
    }

    class StarwarsDirective implements angular.IDirective{
        constructor(private starwarsService: StarwarsService){

        }

        scope = {};

        link($scope: StarWarsDirectiveScope, element: angular.IAugmentedJQuery, attr: angular.IAttributes) {
            this.starwarsService.getMovies().then((data) => {
                $scope.movies = data;
            })
        }
        
        template = '<div ng-repeat="movie in movies"><p>{{ movie.title }}</p></div>';
    }

    class Country implements angular.IDirective {
        scope = {};
        restrict =  "E";
        controller = CountryController;
        controllerAs = 'vm'
    }

    class CountryController {
        printName(name: string): void { 
            console.log("Country says: " + name);
        };
    }

    class City implements angular.IDirective {
        restrict = "E";
        require=  "^country";

        scope = {
            name: "@"
        }

        link($scope: CityScope, 
                element: angular.IAugmentedJQuery, 
                attr: angular.IAttributes, 
                countryCtrl: CountryController) {
            countryCtrl.printName($scope.name);
        }
    }

    interface CityScope extends angular.IScope {
        name: string;
    }
   
    
    
    angular.module('app').directive('myFirstDirective', () => new MyFirstDirective);
    angular.module('app').directive('attributeDirective', () => new AttributeDirective);
    
    angular.module('app').directive('isolatedScopeDirective', () => new IsolatedScopeDirective);
    angular.module('app').directive('transcludeDirective', () => new TranscludeDirective);
    
    angular.module('app').directive('starwarsDirective', (StarwarsService) => new StarwarsDirective(StarwarsService));

    angular.module('app').directive('country', () => new Country);
    angular.module('app').directive('city', () => new City);
}