var app = angular.module('starter', ['ngRoute', 'starter.controller']);

app.config(function ($routeProvider){
	$routeProvider
    .when("/", {
        templateUrl : "../view/home.html",
        controller: "HomeCtrl"
    })
    .when("/classes", {
        templateUrl : "../view/classes.html",
        controller: "ClassesCtrl"
    })
    .when("/contact", {
        templateUrl : "../view/contact.html",
        controller: "ContactCtrl"
    })
});

app.directive('menuDiretiva', function(){
	return{
		restrict: 'E',
		controller: ["$scope", "$window", "$location", function($scope, $window, $location){
			$scope.pagination = function(page){
				switch(page){
					case 1:
						$location.path("/")
						break
					case 2:
						$location.path("/classes")
						break
					case 3:
						$location.path("/contact")
						break
				}
			}
		}],
		templateUrl: "../view/header.html"
	}
})

app.directive('footerDiretiva', function(){
	return{
		restrict: 'E',
		controller: ["$scope", "$window", "$location", function($scope, $window, $location){
		}],
		templateUrl: "../view/footer.html"
	}
})