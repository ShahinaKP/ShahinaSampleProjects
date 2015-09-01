//var plannerPadServices = angular.module('plannerPadServices',[]);

//inject the factory "WeekService" in a service to utilize for getting the current week range.
plannerPad.service('currentWeekService',['$http','$q',
	function($http, $q){
		return {
			currentWeek: function() {
				var curr = new Date; // get current date
				var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
				var last = first + 6; // last day is the first day + 6

				var firstday = new Date(curr.setDate(first));
				var lastday = new Date(curr.setDate(last));
				var weekStartDay = firstday.getDate()+'/'+(firstday.getMonth()+1)+'/'+firstday.getFullYear();
				var weekEndDay = lastday.getDate()+'/'+(lastday.getMonth()+1)+'/'+lastday.getFullYear();
				var weekRange = weekStartDay+' - '+weekEndDay;
			    return weekStartDay+' - '+weekEndDay;
			},
			getCatergories: function(){
					// $http returns a promise, which has a then function, which also returns a promise
					var promise = $http.get('assets/json/categories.json').then(function (response){
					return response.data;
				});
				return promise;				
			},
			getDays: function(){
				var daysArr = [];
				var curr = new Date; // get current date
				var first = curr.getDate() - curr.getDay() + 1; // First day is the day of the month - the day of the week
				var last = first + 6; // last day is the first day + 6

				var firstday = new Date(curr.setDate(first));
				var lastday = new Date(curr.setDate(last));

				for(var i=0; i<7; i++){
					var day = new Date(curr.setDate(first+i));
					daysArr.push(day.getDate()+'/'+(day.getMonth()+1)+'/'+day.getFullYear());
				}
				
				return daysArr;
			}
		}			
}]);

