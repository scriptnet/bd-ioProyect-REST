angular.module("init",[]),

function (a) {
    a.module("core.constants.path", [])
    .constant("constantsPath",{
        PATH_HOME: "/dashboard",
    })

    
}(angular),

function(a){

    a.module("module.core",["ocLazyLoad.component", "core.constants.path" ])
}(angular),

function(a){


    a.module("module.third-parties", ['oc.lazyLoad', 'ui.router', 'ngSanitize'])
}(angular)