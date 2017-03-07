projectifyApp.controller('TeamsCntrl', function($scope, $location,$rootScope){
                         
    console.log("in login controller");
    
    $rootScope.showLink = true;
    
    $scope.submit = function(){
        
        console.log("USER NAME:::::"+$scope.userName);
        console.log("PASSWORD::::::"+$scope.password);
        
        var userName = $scope.userName;
        var password = $scope.password;
        if(userName == 'admin' && password == 'tester123'){
            console.log("user authenticated====>proceeding to dashboard");
            $location.path('/dashboard');
        }else{
             console.log("user authentication failed");
        }
    }
    
});