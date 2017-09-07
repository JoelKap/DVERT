(function () {

    'use strict';




    var routeProvider = function ($routeProvider) {

        var viewBase = '/app/components/';
        var viewBaseCommon = '/app/common/';

        // Client
        $routeProvider.when('/home', {
            controller: 'homeController',
            templateUrl: viewBase + 'home/homeView.html',
            controllerAs: 'vm'
        })
            .when('/dashboard', {
                controller: 'dashController',
                templateUrl: viewBase + 'dashboard/dashboard.html',
                controllerAs: 'vm'
            }).when('/login', {
                controller: 'loginController',
                templateUrl: viewBase + 'login/login.html',
                controllerAs: 'vm'
            })
            .when('/logout', {
                controller: 'loginController',
                templateUrl: viewBaseCommon + 'login/login.html',
                controllerAs: 'vm'
            })
            .when('/adminDashboard', {
                controller: 'loginController',
                templateUrl: viewBaseCommon + 'dashboard/dashboard.html',
                controllerAs: 'vm'
            }).otherwise({
                redirectTo: '/404'
            });
    }
    angular.module('DVERT').config(['$routeProvider', routeProvider]);
    routeProvider.$inject = ['$routeProvider', ];
}());
