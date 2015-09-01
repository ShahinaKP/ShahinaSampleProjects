var plannerPadServices = angular.module('plannerPadServices',[]);
plannerPadServices.service('getCategoriesService',
	function(){
		this.getCatergories = function(){
			var obj = {content:null};
				$http.get('assets/json/categories.json')
				      .success(function(response) {
				      // alert();
				      console.log(response);
				      obj.content = response;
				});
			    return obj;      
			}	       
	}    
);