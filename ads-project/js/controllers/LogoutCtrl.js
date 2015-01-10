'use strict';

// The AppController holds the presentation logic for the entire app (common all screens)
app.controller('AppCtrl', ['$scope', '$location', 'userData', function($scope, $location, userData) {

        // Put the authService in the $scope to make it accessible from all screens
        $scope.userData = userData;

        // Implement the "logout" button click event handler
        
        $scope.logout = function() {
        userData.logout()
        .$promise
        .then(function (data) {
            $location.path('/');
        })
    }
}]);
