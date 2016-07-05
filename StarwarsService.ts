module myApp {
     /**
     * StarwarsService
     */
    export class StarwarsService {
        static $inject = ["$http"];
        constructor(private $http: angular.IHttpService) {
            
        }
        
        getMovies() : angular.IPromise<Movie[]> {
            return this.$http.get("http://swapi.co/api/films/").then((response: any) => {
                return response.data.results;
            });
        }
    }
    
    export class Movie {
        public title: string;
        public director: string;
    }
    
    angular.module("app").service("StarwarsService", StarwarsService);
}