var TextHelperApp = angular.module('TextHelperApp', [ ]);

TextHelperApp.controller('TextHelperController', function ($scope) {

	$scope.text='';
	$scope.wordcount = function () { return $scope.text.split(/[^\s]+/).length - 1; };

});