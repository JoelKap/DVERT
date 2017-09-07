(function () {
    'use strict';

    function dashboardController($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'dashboard';

        init();

        function init() {
            alert('inside dashboard');

        }

    }
    angular.module('DVERT').controller('dashboardController', dashboardController);
    dashboardController.$inject = ['$location'];
})();
