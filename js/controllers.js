//////////////////////////////////////
// AngularJS - Controllers  //////////
// Author: Ariel Jatib ///////////////
//////////////////////////////////////

var benbenControllers = angular.module('benbenControllers',[]);

benben.controller('homeCtrl', function($scope, $http){
    console.log('let\'s load some data!');
    uri = '/data/test.json';
    $http.get(uri, $scope.lorem)
    	.success(function(data){
    		console.log('grabbin some data')
    		$scope.lorem = data;
    		console.log('got the data', $scope.lorem);
    	}).
    	error(function(){
    		console.log('oops - something went wrong')
    	})
});

benben.controller('themeCtrl', [function(){
    console.log('theme')
}]);