projectifyApp.factory('ProjectServcie', ['$http', 'CONSTANT', function($http,CONSTANT){
    
    var ProjectServcie = {};
    
    ProjectServcie.getNotifications = function(){
        
        return [{project:"RaveCrate",description:"gathering requirements right now, should finish by feb 2017."},
                {project:"Biryani App",description:"fresh idea need to look into it."},
                {project:"Food App",description:"Awaiting in the queue for other projects to complete."},
                {project:"Cricket App",description:"Awaiting in the queue for other projects to complete."},
                {project:"Food Blog",description:"Sravani should know about it."}];
        
    };
    
    
    ProjectServcie.getProjects = function(){
        
        return [{title:"RaveCrate",teamSize:"3",deadLine:"Feb 2017",percentCompleted:"70",projectId:1},
                {title:"Biryani App",teamSize:"3",deadLine:"Mar 2017",percentCompleted:"5",projectId:2},
                {title:"Food App",teamSize:"3",deadLine:"Apr 2017",percentCompleted:"0",projectId:4},
                {title:"Cricket App",teamSize:"3",deadLine:"Apr 2017",percentCompleted:"0",projectId:3},
                {title:"Food blog",teamSize:"3",deadLine:"Apr 2017",percentCompleted:"0",projectId:5}];
        
    };
    
    
    ProjectServcie.getProjectDetails = function(projectId){
        
        if(projectId == 1){
            
            return {description:"Ravecrate is about event planning and freelancer kind of application.",teams:['Bhargav Bachina', 'Satya', 'Sravani             Gurram'],startDate:'01/27/2017',endDate:'03/27/2017',daysLeftToComplete:'60',timeLine:[{date:'01/12/2017',description:'Got to know about this project'},{date:'01/24/2017',description:'Gathered all the requirements'},{date:'01/26/2017',description:'Johhny sent the contract'},{date:'01/27/2017',description:'Started working on the project'},{date:'01/28/2017',description:'had some questions regarding the project and sent these questions to johhny'},{date:'01/29/2017',description:'awaiting other design from the johhny'}]};
        
        }else if(projectId == 2){
            
            return {description:"Biryani App is all about rating biryanis in your town",teams:['Bhargav Bachina', 'Satya', 'Sravani             Gurram'],startDate:'03/01/2017',endDate:'04/27/2017',daysLeftToComplete:'90',timeLine:[{date:'01/28/2017',description:'Got to know about this project'},{date:'01/29/2017',description:'working on the project'}]};
        
        }else if(projectId == 3){
            
            return {description:"CricketApp is all about keeping score at cricket ground and sharing.",teams:['Bhargav Bachina', 'Satya', 'Sravani   Gurram'],startDate:'03/27/2017',endDate:'04/27/2017',daysLeftToComplete:'30',timeLine:[{date:'05/12/2017',description:'Got to know about this project'},{date:'01/24/2017',description:'Gathering all the requirements'},{date:'01/26/2017',description:'Working on the backend'}]};
            
        }else if(projectId == 4){
            
            return {description:"FoodApp is sharing and selling food at home",teams:['Bhargav Bachina', 'Satya', 'Sravani             Gurram'],startDate:'03/27/2017',endDate:'04/25/2017',daysLeftToComplete:'28',timeLine:[{date:'01/12/2017',description:'Got to know about this project'},{date:'01/24/2017',description:'Gatherering all the requirements'},{date:'01/26/2017',description:'Working on the backend'}]};
            
        }
        
    }
    
    
    return ProjectServcie;

}]);