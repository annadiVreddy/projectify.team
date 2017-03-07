projectifyApp.controller('regCntrl', function($scope, $location,$rootScope){
                         
    $scope.submit = function(){
        
        console.log("USER NAME:::::"+$scope.userName);
        console.log("PASSWORD::::::"+$scope.password);
        
        var userName = $scope.userName;
        var password = $scope.password;
        
    }
    
});