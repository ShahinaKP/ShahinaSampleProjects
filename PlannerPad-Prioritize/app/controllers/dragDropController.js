plannerPad.controller('DragDropController', ['$scope', function($scope){
    $scope.droppedObjects = [];
    
    $scope.onDropComplete=function(data,evt){
    	var index = -1;
    	for(var i=0; i < $scope.droppedObjects.length; i++) {
    		if($scope.droppedObjects[i].$$hashKey === data.$$hashKey) {
    			index = 0;
    			break;
    		}
    	}
        if (index == -1)
        	$scope.droppedObjects.push(data);
    }  
}]);