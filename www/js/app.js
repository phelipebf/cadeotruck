var app = angular.module("cadeotruck", ['ngMaterial', 'ngRoute']).config(function($mdThemingProvider, $routeProvider) {
    $mdThemingProvider
    .theme('default')
        .primaryPalette('deep-orange')
        .accentPalette('orange');

    $routeProvider
    .when("/",{
        templateUrl:"templates/mapa.html",
        controller:"Mapa"
    })
    .when("/cardapio/:id",{
        templateUrl:"templates/cardapio.html",
        controller:"Cardapio"
    })    
    .otherwise({
        redirectTo:"/"
    });
});

app.controller('AppCtrl', ['$scope', '$mdSidenav', function($scope, $mdSidenav){
    $scope.toggleSidenav = function(menuId) {
        $mdSidenav(menuId).toggle();
    }; 
}])

.controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });
    };
    
    $scope.menus = [{
      //icone : imagePath,      
      titulo: "Mapa"
    }, {
      //icone : imagePath,      
      titulo: "Agenda"
    }, {
      //icone : imagePath,      
      titulo: "Eventos"
    }];
  })
  
.controller('Mapa', function(){
    console.log("Carregou Mapa (route)");
})

.controller('Cardapio', function($scope, $routeParams){    
    $scope.id = $routeParams.id;
})

;