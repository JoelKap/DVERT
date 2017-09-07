(function () {
    'use strict';

    angular
        .module('app')
        .controller('pendingAdvert', pendingAdvert);

    pendingAdvert.$inject = ['$location'];

    function pendingAdvert($location) {
        /* jshint validthis:true */
        var vm = this;
        vm.title = 'pendingAdvert';

        activate();

        function activate() { }
    }
})();
