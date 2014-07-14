//Define an angular module for our app
var fifaApp = angular.module('fifaApp', ['ngRoute' , 'fifaControllers' , 'fifaServices']);
 
//Define Routing for app
//Uri /AddNewOrder -> template add_order.html and Controller AddOrderController
//Uri /ShowOrders -> template show_orders.html and Controller AddOrderController
fifaApp.config(['$routeProvider','$httpProvider',
  function($routeProvider,$httpProvider) {
    $routeProvider.
      when('/home', {
        
    }).
      when('/teams', {
        templateUrl: 'templates/teams.html',
        controller: 'TeamController'
    }).
      when('/players/:teamName', {
        templateUrl: 'templates/players.html',
        controller: 'PlayersController'
    }).
       when('/schedule', {
        templateUrl: 'templates/schedule.html',
        controller: 'ScheduleController'
    }).
        when('/awards', {
        templateUrl: 'templates/awards.html',
        controller: 'AwardsController'
    }).
      otherwise({
        redirectTo: '/home'
      });
}]);
