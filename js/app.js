var app = angular.module("myPortfolio",[]);

app.controller('PageController',['$scope','$http',function($scope,$http){
	$scope.works = {};
	$http({
		method:'GET',
		url:'/projects.json'
	}).success(function(data){
		$scope.works = data;
	})
}]);

app.directive('workSection',function(){
	return{
		restrict:'E',
		scope:true,
        templateUrl:'/templates/works.html',
        controller: function($scope,$attrs){
        	this.filterby = $attrs.filterby;
        },
        controllerAs:"workCard"
	};
});