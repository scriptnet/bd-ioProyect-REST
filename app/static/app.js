! function(a){
    "use strict";


    function b(a) {
        a.title = "Hola mundo";
    }


    a.module("app", ["module.third-parties", "module.core", "routes"])
    .component("mainNav",{
        templateUrl: "views/main-nav/main-nav.html",
    })
    .controller("appController", b);
    b.$inject = ["$scope"];

}(angular)