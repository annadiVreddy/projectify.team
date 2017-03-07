projectifyApp.directive('header', function() {
  return {
    templateUrl: '/templates/directives/header.html',
    restrict: 'E',
    controller: function isActive($scope,$location){
        var fromLocationServcie = $location.path();
        $scope.isActive = function(currentLink){
          if(currentLink == fromLocationServcie){
              console.log("current link::"+currentLink+":::matches $location.path():::::"+$location.path());
              return true;
          }
        }
    }
}
});