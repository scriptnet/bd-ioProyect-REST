! function(a) {
    "use strict";
    
    function b(a) {
        console.log("alaaa")
    }

    a.module("view.dashboard.controller", [])
    .controller("dashboardCtrl", b),

    b.$inject = ["$scope"]
}(angular)