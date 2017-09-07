(function () {
    'use strict';

    function loginController($location, $scope) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'login';

        $scope.login = function (username, password) {
            $scope.path('/adminDashboard');
        }
       
    }

    angular.module('DVERT').controller('loginController', loginController);
    loginController.$inject = ['$location', '$scope'];
})();
