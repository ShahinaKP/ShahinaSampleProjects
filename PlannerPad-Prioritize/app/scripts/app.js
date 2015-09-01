var plannerPad = angular.module('PlannerPad',['ui.sortable','ngRoute']);

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
    	templateUrl: 'app/directives/day.html'
	}
});


