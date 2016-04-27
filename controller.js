(function () {
   
   'use strict';
   
    var app = angular.module('app');
    
    app.controller('DemoController',
        
                ['$scope', 'MoviesService',
        function($scope,   moviesService){
            $scope.searchPhrase = '';

            moviesService.getAll().then(function (movies) {
                $scope.movies = movies;    
            }, function(error){
                $scope.error = error;
            });
        }]);
    
}(angular));