// script.js

    // create the module and name it webAgentApp
        // also include ngRoute for all our routing needs
    var projectifyApp = angular.module('projectifyApp', ['ui.router','ngMessages', 'ngResource']);

    // configure our routes
    projectifyApp.config(function($stateProvider, $urlRouterProvider, $locationProvider,$resourceProvider) {
        //$locationProvider.hashPrefix('');
        // Don't strip trailing slashes from calculated URLs
        //$resourceProvider.defaults.stripTrailingSlashes = false;
        
        $urlRouterProvider.otherwise('/');
        
        $stateProvider
        
        .state('home', {
            url: '/',
            templateUrl: 'templates/login.html',
            controller  : 'loginCntrl'
        })
        
        .state('register',{
            url: '/register',
            templateUrl: 'templates/register.html',
            controller: 'regCntrl'
        })
        
        .state('login', {
            url: '/login',
            templateUrl: 'templates/login.html',
            controller  : 'loginCntrl'
        })
        
       
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'templates/dashboard.html',
            controller  : 'DashboardCntrl'
        })
        
         .state('projects', {
            url: '/projects',
            templateUrl: 'templates/projects.html',
            controller  : 'ProjectCntrl'
         })
        
        .state('projects.createProject', {
            url: '/createproject',
            templateUrl: 'templates/createProject.html',
            controller  : 'ProjectCntrl'
        })
        
        
        .state('projects.projectVerify', {
            url: '/projectVerify',
            templateUrl: 'templates/createProjectVerify.html',
            controller  : 'ProjectCntrl'
        })
        
        
        .state('projects.projectConfirm', {
            url: '/projectConfirm',
            templateUrl: 'templates/createProjectConfirmation.html',
            controller  : 'ProjectCntrl'
        })
        
        .state('teams', {
            url: '/teams',
            templateUrl: 'templates/teams.html',
            controller  : 'TeamsCntrl'
         })
        
        .state('tasks', {
            url: '/deadlines',
            templateUrl: 'templates/projectManagement.html',
            controller  : 'ProjectMngmtCntrl'
         })
        
         .state('logout', {
            url: '/logout',
            templateUrl: 'templates/login.html',
            controller  : 'LogoutCntlr'
         })
        
        .state('client', {
            url: '/client',
            templateUrl: 'templates/clientPage.html',
            controller  : 'ClientCntrl'
         });
        
         $locationProvider.html5Mode(true);
        
    });


    
    
    projectifyApp.filter('split', function() {
        return function(input,splitChar,splitIndex) {
            return input.split(splitChar)[splitIndex];
        }
    });

    projectifyApp.filter('arrayToText', function() {
        
        return function(input) {
            var inputTxt = '';
            if(input !== undefined && input.length > 0){
                for(i=0; i<input.length; i++){
                    inputTxt += input[i]+',';
                }
            }
            return inputTxt;
        }
    });
    
    
    projectifyApp.service('HeaderTitle', function(){
    	var headerTitle = '';
        return {setTitle: function(title){headerTitle = title;},getTitle:function(){return headerTitle;}
        }
    });
    
    projectifyApp.constant("CONSTANT", {
        "CHANGE_PASSWORD_TITLE": "Web Agent - Change Password",
        "DE_ENROLL_CA_TITLE": "Web Agent - De-Enroll CA from OAM",
        "FORGOT_USERNAME_TITLE": "Web Agent - Forgot Username",
        "TRANSACTIONAL_SEARCH_TITLE":"Web Agent - Transaction Search",
        "CONTEXT_ROOT":"/webAgent",
        "CHECK_PASSWORD_VALIDATION_URL":"/checkPasswordValidation.htm",
        "PASSWORD_CONFIRMATION_URL":"/passwordConfirmation.htm",
        "VERIFY_EBILL_ENROLLED_URL":"/verifyEbillEnrolled.htm",
        "REMOVE_EBILL_AND_CA_URL":"/removeEbillAndCA.htm",
        "FORGOT_USERNAME_URL":"/forgetuserName.htm",
        "TRANSACTION_TYPES_URL":"/transactionTypes.htm",
        "GET_DONT_SHOW_ARRAY_URL":"/getDisplayProperties.htm",
        "TRANSACTION_RESULT_URL":"/transResult.htm",
        "GET_REQUEST_DETAILS_URL":"/transformRequest.htm",
        "GET_RESPONSE_DETAILS_URL":"/transformResponse.htm",
        "AJAX_POST_CONFIG_HEADER":{headers : {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'}},
        "NO":"N",
        "YES":"Y",
        "O":"O",
        "X":"X",
        "F":"F",
        "FAILURE":"Failure",
        "S":"S",
        "SUCCESS":"Success"
    })
    
    
    projectifyApp.directive('headerItem', ['$compile', '$http', '$templateCache','$timeout','HeaderTitle', function($compile, $http, $templateCache,$timeout,HeaderTitle) {
    	
        var getTemplate = function() {
        	var templateUrl = '/webAgent/pages/headerTemplate.html';
            return $http.get(templateUrl, {cache: $templateCache});
        }
        
        var linker = function(scope, element, attrs) {
        	var loader = getTemplate();
        	scope.headerTitle = HeaderTitle.getTitle();
        	var promise = loader.success(function(html) {
                element.html(html);
            }).then(function (response) {
            	element.replaceWith($compile(element.html())(scope));
            });
            $timeout(loader, 0);
        }
        return {restrict: 'E',scope: {headerItem: '='},link: linker};
    }]);
    
    
    projectifyApp.directive('myEnter', function () {
        return function (scope, element, attrs) {
            element.bind("keydown keypress", function (event) {
                if(event.which === 13) {
                    scope.$apply(function (){
                        scope.$eval(attrs.myEnter);
                    });
                    event.preventDefault();
                }
            });
        };
    });

    
    projectifyApp.controller('rootCntrl', function($location){
        
        $scope.$on('$routeUpdate', function(){
            console.log("path::::"+$location.path());
            if($location.path() == '/' || $location.path() == '/login'){
                angular.element("loginspan").text("Login");
            }else{
                angular.element("loginspan").text("Logout");
            }
        });
    });

   