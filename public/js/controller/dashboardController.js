projectifyApp.controller('DashboardCntrl', function($scope, ProjectServcie, $rootScope){
                         
     console.log("in Dashboard controller");
    
     $rootScope.showLink = true;
     
     $scope.notifications = ProjectServcie.getNotifications();
     
     $scope.currentProjects = ProjectServcie.getProjects();
   
      
});