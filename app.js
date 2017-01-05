(function(){
  'use strict';

  angular.module('assmnt1App',[])
  .controller('Assmnt1Controller', function($scope){
    $scope.feedback="Do it";
    $scope.lunchMenu ="";
    $scope.saySomething = function(){
      console.log("aa "+ $scope.lunchMenu);
    }
  });
})();
