projectifyApp.factory('User', function($resource,CONSTANT){
    
    return $resource("/api/validateUser", {}, {
        get     : {method: "GET", params: {user: "-1"}},
        validate: {method : "POST"}
    });
    
    return $resource("/api/registerUser", {}, {
        register: {method : "POST", params: {user: "-1"}}
    });
    
});