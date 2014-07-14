var fifaServices = angular.module("fifaServices", []);

fifaServices.service('TeamsService',['$http','$q',
	function($http, $q) {
	
	var url = 'json/teams.json';
	this.callWebService = function(url){
			
			var deferred = $q.defer();
			if(typeof params == "undefined"){
				params = "";
			}
			
			var httpObj = {};
	 		httpObj.url = url;
	 		
	 		
	 	 			
			$http(httpObj).success(function(response, status) {
				
		    	deferred.resolve(response);
		    	
			}).error(function(errors, status) {
				
				// please note the type of error expecting is array
				// so form error as array if you modifying it
				if(status == 406){ // 406- Network error
					deferred.reject(errors);
				}
				
			    
			});
			return deferred.promise;	    	
		};

	   	this.list = function() {
	    	return this.callWebService(url);
	   	};    
   
}]);