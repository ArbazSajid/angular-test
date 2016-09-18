(function(){


	angular.module('LunchCheck',[])

	.controller('LunchCheckController', LunchCheckController);

	LunchCheckController.$inject = ['$scope'];

	function LunchCheckController($scope){

		$scope.menu="";
		$scope.message="";
		$scope.warning_message="We do NOT consider and empty item, i.e., , , as an item towards to the count";
		$scope.inputStyle={};
		$scope.textStyle={};

		$scope.calculateMenuCount= function(){
            var list=$scope.menu.split(',');
            var count=0;

            for(var i=0; i<list.length; i++){
            	if(list[i].trim().length>0){
                   count++;
            	} 
            }
            displayMessage(count);
		};

		function displayMessage(count){

			if(count==0)
			{
              $scope.message="Please enter data first";
              $scope.inputStyle={'border-color':'red'};
		      $scope.textStyle={'color':'red'};
			}else if(count<=3){
              $scope.message="Enjoy!";
              $scope.inputStyle={'border-color':'green'};
		      $scope.textStyle={'color':'green'};
			}else{
			  $scope.message="Too much!";
			  $scope.inputStyle={'border-color':'green'};
		      $scope.textStyle={'color':'green'};
			}

		};


	}




})();