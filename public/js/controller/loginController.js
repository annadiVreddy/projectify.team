projectifyApp.controller('loginCntrl', function($scope, $location, User,$rootScope){
                         
    console.log("in login controller::::"+$scope.showLink);
    
    $rootScope.showLink = false;
    
    
    
    $scope.submit = function(){
        
        console.log("USER NAME:::::"+$scope.userName);
        console.log("PASSWORD::::::"+$scope.password);
        
        var postData = {};
        postData.userName = $scope.userName;
        postData.password = $scope.password;
        
        var user = User.save({}, postData, function(success,error) {
            if(success){
                $scope.loginerror = false;
                console.log("user authenticated====>proceeding based on the role::::"+success.role);
                if(success.role == 'admin'){
                    $location.path('/dashboard');
                }else if(success.role == 'client'){
                    $location.path('/client');
                }else{
                    $scope.loginerror = true;
                }
            }else{
               console.log("user authentication failed");
               $scope.loginerror = true;
            }
        });
    }
    
    
    $scope.signUp = function() {
        $location.path('/register');
    };
    
    
    
    /*
    $scope.signUp = function(parentElem){
        
        var modalInstance = $uibModal.open({
            animation: $ctrl.animationsEnabled,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: '/templates/signUpModal.html',
            controller: 'signUpCntrl',
            size: 'sm',
            appendTo: parentElem,
          resolve: {
            items: function () {
              return $ctrl.items;
            }
          }
        });
        
        modalInstance.result.then(function (selectedItem) {
            
        }, function () {
            console.log('Modal dismissed at: ' + new Date());
        });
  };*/
    
});
    

/*projectifyApp.controller('signUpCntrl', function($scope, $location, $uibModal){
    
    

});*/
