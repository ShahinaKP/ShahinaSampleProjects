var plannerPad = angular.module('PlannerPad',['ngRoute', 'ngDraggable']);

plannerPad.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login',{
			templateUrl: 'app/views/login.html',
			controller: 'LoginController'
		}).
		when('/organize',{
			templateUrl: 'app/views/organize.html',
			controller: 'OrganizeController'
		}).
		when('/prioritize',{
			templateUrl: 'app/views/prioritize.html',
			controller: 'PrioritizeController'
		}).
		otherwise({
	        redirectTo: '/prioritize'
	    });
}]);

plannerPad.directive('ngDay', function() {
	return {
		restrict: 'EA',
    	templateUrl: 'app/directives/day.html',
    	link: function($scope, $element){
    		
    	}
	}
});

plannerPad.directive('ngLeftlist', function() {
    return {
    	restrict: 'A',
    	link: function ($scope, $element) {
        	$element.height($(window).height() - $('header').outerHeight() - $('#mainHeader').outerHeight());
        }
    }
});


