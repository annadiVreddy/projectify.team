 
projectifyApp.directive('pfTodoTask', function(){
    return {
        templateUrl: "templates/directives/todoTask.html",
        restrict: "E",
        controller: function isActive($scope,$location){
             $scope.deleteTask = function(taskId){
             console.log("deleting this task::::"+taskId);
             $scope.todoTasks = $scope.todoTasks.filter(function(el) {
                return el.taskId !== taskId;
             });
         }
    }
    }
    
});




projectifyApp.directive('pfOngoingTask', function(){
    return {
        templateUrl: "templates/directives/ongoingTasks.html",
        restrict: "E",
        controller: function($scope){
                $scope.changeStatus = true;
    
                $scope.changeStatusFun =  function(index){

                    console.log("index in change status::::"+index);
                    $scope.changeStatusIndex = index;
                    $scope.chnagingStatusIndex = index;
                }
    
                $scope.completed =  function(index,taskId) {

                    console.log("index in completed::::"+index);
                    var completedObj = {};
                    $scope.ongoingTasks = $scope.ongoingTasks.filter(function(el) {
                        if(el.taskId === taskId){
                            completedObj = el;
                        }
                        return el.taskId !== taskId;
                    });
                    console.log(completedObj);
                    var taskHistoryAry = $scope.taskHistory;
                    taskHistoryAry.push(completedObj);
                    $scope.taskHistory = taskHistoryAry;
                    $scope.changeStatusIndex = null;
                    $scope.chnagingStatusIndex = null;
                }
    

                $scope.pushBack =  function(index,taskId){

                    console.log("index in push back::::"+index);
                    var deletedObj = {};
                    $scope.ongoingTasks = $scope.ongoingTasks.filter(function(el) {
                        if(el.taskId === taskId){
                            deletedObj = el;
                        }
                        return el.taskId !== taskId;
                    });
                    console.log(deletedObj);
                    var todoTaskAry = $scope.todoTasks;
                    todoTaskAry.push(deletedObj);
                    $scope.todoTasks = todoTaskAry;
                    $scope.changeStatusIndex = null;
                    $scope.chnagingStatusIndex = null;
                }
        }
    }
});

projectifyApp.directive('pfTaskHistory', function(){
    return {
        templateUrl: "templates/directives/taskHistory.html",
        restrict: "E"
    }
});