(function(){
  'use strict';

  angular.module('LunchCheck',[])
  .controller('LunchCheckController', function($scope){
    $scope.feedback="";
    $scope.lunchMenu ="";
    $scope.color="";
    $scope.saySomething = function(){
      var lunchItems = $scope.lunchMenu.split(",");
      var itemSize = 0;
      for(var item in lunchItems){
        if(!isEmpty(lunchItems[item]))
        {
          itemSize++;
        }
      }

      if(itemSize == 0){
        $scope.feedback = "Please enter data first!";
        $scope.color="red";
      }
      else if(itemSize < 4){
         $scope.feedback = "Enjoy!";
         $scope.color="green";
      }
      else if(itemSize > 3){
        $scope.feedback = "Too much!";
        $scope.color="green";
      }

      function isEmpty(str) {
          return (typeof str == 'undefined' || !str || str.trim().length === 0);
      }
    };



  });
})();
