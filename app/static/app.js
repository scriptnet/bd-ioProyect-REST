! function(a){

    function b(a) {
        a.title = "Hola mundo";
        
    }
    a.module("app", [])
    .controller("appController", b);

    b.$inject = ["$scope"];
}(angular)