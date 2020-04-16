! function(a){
    "use strict";

    function c(a,b){
       b.otherwise('/'),
       a.state("dashboard",{
           url: "/",
           templateUrl: "static/views/dashboard/dashboard.html",
       });
    }

    function b(a) {
        a.title = "Hola mundo";
    }
    a.module("app", ["ui.router", "ngSanitize"])
    .config(c)
    .component("mainNav",{
        templateUrl: "static/views/main-nav/main-nav.html",
    })
    .controller("appController", b);
    c.$inject = ["$stateProvider", "$urlRouterProvider"];
    b.$inject = ["$scope"];

}(angular)