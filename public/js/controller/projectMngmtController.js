projectifyApp.controller('ProjectMngmtCntrl', function($scope, ProjectMngmtService,$rootScope){
                         
    console.log("in PROJECT MANAGEMENT CONTROLLER:::");
    
    $rootScope.showLink = true;
    
    $scope.todoTasks = ProjectMngmtService.getTodoTasks();
    $scope.ongoingTasks = ProjectMngmtService.getOngoingTasks();
    $scope.taskHistory = ProjectMngmtService.getTaskHistory();
    
    $scope.addTask = function(){
        
        console.log("adding new task::::");
        $scope.addingTask = !$scope.addingTask;
    }
    
    $scope.submitTask = function(){
        
        console.log("task title::::"+$scope.title);
        console.log("task description::::"+$scope.description);
        console.log("task project::::"+$scope.project);
        console.log("task worker::::"+$scope.worker);
        console.log("task title::::"+$scope.deadline);
        console.log("task title::::"+$scope.status);
        
        $scope.addingTask = !$scope.addingTask;
        
    }
    
   /* $scope.addTask = function() {
      alert = $mdDialog.alert({
        title: 'Attention',
        textContent: 'This is an example of how easy dialogs can be!',
        ok: 'Close'
      });

      $mdDialog
        .show( alert )
        .finally(function() {
          alert = undefined;
        });
    }
    
   
     /* $scope.addTask = function() {

    ModalService.showModal({
      templateUrl: "templates/directives/modal.html",
      controller: "ModalCntrl"
    }).then(function(modal) {
      modal.element.modal();
      modal.close.then(function(result) {
        $scope.yesNoResult = result ? "You said Yes" : "You said No";
      });
    });

  }; */
   
    
});