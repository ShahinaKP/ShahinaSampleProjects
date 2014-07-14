var fifaControllers = angular.module('fifaControllers',[]);
var teams = null;
//var teamsForPlayers = [];
/*For Home screen*/
/*fifaControllers.controller('HomeController',
	function($scope){
		$scope.ballImg = 'assets/wallpapers/ball.jpg';
		$scope.trophyImg = 'assets/wallpapers/trophy.png';
	});*/

/*For Teams Screen*/
fifaControllers.controller('TeamController',['$scope','TeamsService','$location',
	function($scope,TeamsService,$location){				

		$scope.teams = [];		

		getFlags();
		function getFlags(){

			TeamsService.list().then(function(data){	

				$scope.teams = data;
			}, function(){
				//failure handler
			});
		}
		$scope.getMyTeam = function(teamName) {
				$location.path('/players/' +teamName);
		}
	}]);

/*For Players Screen*/
fifaControllers.controller('PlayersController',['$scope','TeamsService','$routeParams',
	function($scope,TeamsService,$routeParams){
		// $scope.selectedTeam = [];

		getTeams(function() {
				$scope.selectedTeam = ($routeParams.teamName == 'default') ? showFirstTeam() : getClikcedTeam($routeParams.teamName);
				console.log($scope.selectedTeam);

		});

		


	function getTeams(callback) {
		TeamsService.list().then(function (data) {
			teams = data;
			console.log(teams);
			callback();
			
		},function(){
			//failure handler
		});
	}

	function showFirstTeam() {


		return teams[0];
		// alert($scope.teams);
	}

	function getClikcedTeam(teamName) {
		for(i in teams) {
			if(teams[i].name == teamName) {
				return teams[i];
			}
		}
	}

	}]);

fifaControllers.controller('ScheduleController',['$scope',
	function($scope){
		$scope.scheduleImage = 'fifa-world-cup-match-schedule.jpg';
		// $(document).ready(function() {
	 //        $('body').css('background-image', 'url(../assets/images/wallpapers/bg.jpg');
	 //    });
	}]);