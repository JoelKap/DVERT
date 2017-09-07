(function () {
    'use strict';

    function index($location, $sessionStorage, $scope, $rootScope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'index';

        init();

        function init() {
            $location.path('/login');
        };

    }
        angular.module('DVERT').controller('index', index);
        index.$inject = ['$location', '$sessionStorage', '$scope', '$rootScope'];
    })();
