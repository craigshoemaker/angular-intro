(function () {
    
   'use strict'; 
   
   var app = angular.module('app');
   
    app.directive('movieInfoCard', function(){
        return {
            templateUrl: 'movieInfoCard.html',
            restrict: 'E'
        };
    });
    
}(angular));