projectifyApp.controller('ProjectCntrl', function($scope, $location, ProjectServcie, $rootScope){
                         
    console.log("in Project controller");
    
    $rootScope.showLink = true;
    
    $scope.projectVerify = function(){
        
        console.log("redirecting to project verify page.");
        
        $location.path('/projectVerify');
       
    }
    
    
    $scope.projectConfirm = function(){
        
        console.log("redirecting to project confirm page.");
        
        $location.path('/projectConfirm');
        
    }
    
    
   $scope.currentProjects = ProjectServcie.getProjects();
    
   $scope.projectMenu = function(projectId){
        
       var projectDtls = ProjectServcie.getProjectDetails(projectId);
       $scope.description = projectDtls.description;
       $scope.teams = projectDtls.teams;
       $scope.startDate = projectDtls.startDate;
       $scope.endDate = projectDtls.endDate;
       $scope.days = projectDtls.daysLeftToComplete;
       $scope.timeLine = projectDtls.timeLine;
       
   }
    
   $rootScope.$on('$stateChangeSuccess', function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
    
                        
});