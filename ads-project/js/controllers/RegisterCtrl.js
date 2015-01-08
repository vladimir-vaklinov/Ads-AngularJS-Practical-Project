 app.controller('RegisterCtrl', ['$scope', 'townsData', 'userData', function($scope, townsData, userData) {
 	$scope.pageTitle = 'Registration';
 	townsData.getTowns()
 		.$promise
 		.then(function (data) {
 			$scope.towns = data;
 		});

	$scope.register = function (user) {
		userData.register(user);
	}
}]);