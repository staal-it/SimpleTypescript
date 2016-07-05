/// <reference path="typings/tsd.d.ts" />

module myApp {

  export class HomeController {
    title: string;
    films: Movie[];
    name: string;
    
    static $inject = ["StarwarsService"];
    constructor(private starwarsService : StarwarsService){
      this.name = "Hello world!";
      this.title = "Home!";
      this.starwarsService.getMovies().then((response) => {
        this.films = response;
      });
    }
    
    setName(name: string) : void {
      this.name = name;
    }
  }

  angular.module("app").controller("HomeController", HomeController);
}
