! function(a){

    function b(a) {
        a.title = "Welcome";
        
    }
    a.module("app", [])
    .controller("appController", b);

    b.$inject = ["$scope"];
}(angular)