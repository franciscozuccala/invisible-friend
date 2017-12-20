(function(){
    app.controller('DialogController', function($scope, $mdDialog, PlayerService) {
        $scope.players = PlayerService.players

        $scope.newUser = {
            "name": "",
            "mail": "",
            "invisibleFriend": ""
          }
    
          $scope.addPlayer = function(){            
            if($scope.newUser.name !== ""){
              $scope.players.push($scope.newUser);
            }
          }

    });
})();