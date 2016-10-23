var TextHelperApp = angular.module('TextHelperApp', [ ]);

TextHelperApp.controller('TextHelperController', function ($scope) {

	$scope.text='';
	$scope.keyword1='';
	$scope.keyword2='';
	$scope.keyword3='';
	$scope.keyword4='';
	$scope.keyword5='';
	$scope.keyword6='';
	$scope.keyword7='';
	$scope.keyword8='';
	$scope.keyword9='';
	$scope.keyword10='';
	$scope.wordcount = function () { return $scope.text.split(/[^\s]+/).length - 1; };
	$scope.keywordcount = function (keyword) {
		var regex = new RegExp("/" + "test" + "/g");
		return ($scope.text.match(/test/g) || []).length; 
	};

});