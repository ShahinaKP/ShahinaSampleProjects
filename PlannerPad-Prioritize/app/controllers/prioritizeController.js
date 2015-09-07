//var plannerPadControllers = angular.module('plannerPadControllers');

plannerPad.controller('PrioritizeController' , ['$scope','currentWeekService','$http',
	function($scope, currentWeekService,$http){
		$scope.weekLbl = "Planning for the week of "+currentWeekService.currentWeek();

        currentWeekService.getCatergories().then(function(d) {	    	
	    	var arr = [];
	    	var actArr = []
	    	for(var i=0;i<d.length;i++){
	    		arr.push(d[i]);	    		
	    	}
			$scope.categories = arr;			
	    }); 

        $scope.days = currentWeekService.getDays();
	    /*$scope.events = [];	    

	    $scope.sortableOptions = {
			cursor: "move",
			start:function(){

			},
			stop: function(event, ui){
				$(this).sortable('cancel');
				$scope.days.push({
					day: "01/9/2015",
				    activity: "meeting"});
			}
		};*/     
	}

]);





