! function (a) {
    "use strict";

    function b(a) {
        a.config({
            modules:[{
                        name: "view.dashboard",
                        files: [
                            "static/components/dashboard/dashboard.module.js",
                            "static/components/dashboard/dashboard.controller.js",
                        ]
                    },{
                        name: "ddd",
                        files: [
                            
                        ]
                    }
            ]
        })
    }


    a.module("ocLazyLoad.component", [])
    .config(b),
    b.$inject = ["$ocLazyLoadProvider"]
}(angular);