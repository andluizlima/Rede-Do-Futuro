var ctrl = angular.module('starter.controller',[]);

ctrl.controller('HomeCtrl', ['$scope', '$http', '$window', function($scope, $http, $window) {
	console.log("Home")
}]);

ctrl.controller('ClassesCtrl', ['$scope', '$http', function($scope, $http) {
	
	carregaVideos = function(){
		$scope.classes = [[[1, "Jogar a rede", "rede.jpg"], [2, "Pescar com vara", "vara.jpg"], [3, "Filho de peixe, peixinho é?", "peixinho.jpg"]],
		[[1, "Jogar a rede", "rede.jpg"], [2, "Pescar com vara", "vara.jpg"]]]
		
		
	}

	carregaVideos()

}]);

ctrl.controller('ContactCtrl', ['$scope', '$http', function($scope, $http) {
	console.log("Contatos")
}]);