var app = angular.module('invisible-friend',['ngMaterial']);
app.factory('PlayerService', function(){
    this.players = [];
    return this;
});
(function(){

  app.controller('AppController', function($scope, $mdDialog, PlayerService) {
      $scope.players = PlayerService.players
    
      $scope.showDialog = function(ev) {        
          $mdDialog.show({
            controller: DialogController,
            templateUrl: 'dialog.tmpl.html',
            parent: angular.element(document.body),
            targetEvent: ev,
            clickOutsideToClose:true,
            fullscreen: false
          })
          .then(function(answer) {
            console.log("Answered: " + $scope.players);
            
          }, function() {
            console.log("Canceled");
            
          });
        };

        function DialogController($scope, $mdDialog) {
          $scope.hide = function() {
            $mdDialog.hide();
          };
      
          $scope.cancel = function() {
            $mdDialog.cancel();
          };
      
          $scope.sendEmails = function() {
            $mdDialog.hide();
          };
        }
  });
})();