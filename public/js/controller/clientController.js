projectifyApp.controller('ClientCntrl', function($scope, ProjectServcie, $rootScope){
                         
     console.log("in Client controller");
    
     $rootScope.showLink = false;
    
     $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
      
});