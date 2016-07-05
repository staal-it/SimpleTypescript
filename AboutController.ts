/// <reference path="typings/tsd.d.ts" />

module myApp {

  export class AboutController {
    title: string;
    constructor(){
      this.title = "About!";
    }
  }

  angular.module("app").controller("AboutController", AboutController);
}