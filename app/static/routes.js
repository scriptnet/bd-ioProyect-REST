! function (a) {
    "use strict";

    function b(a, b, c) {
        return {
            loadMyCtrl: ["$ocLazyLoad", "$rootScope", "$timeout", function(d, e, f) {
                var g = [].concat(a, b || []);
                return e[c] = !0, d.load(g).then(function() {
                    f(function() {
                        e[c] = !1
                    }, 1e3)
                })
            }]
        }
    }

    function c(a, c, d) {
        // d.hashPrefix('scriptnet');
        c.otherwise(d.PATH_HOME),
        a.state("dashboard", {
            url: d.PATH_HOME,
            controller: "dashboardCtrl",
            controllerAs: "dashVM",
            templateUrl: "views/dashboard/dashboard.html",
            resolve: b("view.dashboard", [])
        })

    }



    a.module("routes", [])
    .config(c), 
    c.$inject = ["$stateProvider", "$urlRouterProvider", "constantsPath"]
}(angular)