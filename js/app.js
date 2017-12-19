(function(){

  var app = angular.module('invisible-friend',['ngMaterial']);
  app.controller('AppController', function($scope, $mdDialog) {
      $scope.status = '  ';
      $scope.customFullscreen = false;
    
      $scope.showDialog = function(ev) {        
          $mdDialog.show({
            controller: DialogController,
            templateUrl: 'dialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: $scope.customFullscreen
          })
          .then(function(answer) {
            $scope.status = 'You said the information was "' + answer + '".';
          }, function() {
            $scope.status = 'You cancelled the dialog.';
          });
        };

        function DialogController($scope, $mdDialog) {
          $scope.hide = function() {
            $mdDialog.hide();
          };
      
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
      
          $scope.answer = function(answer) {
            $mdDialog.hide(answer);
          };
        }
  });
})();