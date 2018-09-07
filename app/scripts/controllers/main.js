'use strict';

/**
 * @ngdoc function
 * @name tareaApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the tareaApp
 */
angular.module('tareaApp')
  .controller('MainCtrl', function ($scope) {
    $scope.tareas = ['Item 1','Item 2','Item 3'];
    $scope.addTarea = function(){
      $scope.tareas.push($scope.tarea);
      $scope.tarea='';
    };
    $scope.eliminarTarea = function(index){
      $scope.tareas.splice(index, 1);
      $scope.tarea='';
    };
  });
