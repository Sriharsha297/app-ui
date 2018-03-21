(function() {
'use strict';

angular
    .module('myApp')
        .controller('profileController', profileController);
function profileController($scope, $http) {
    $scope.message = "hello!"
}

})();