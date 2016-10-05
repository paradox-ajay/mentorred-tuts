var app = angular.module('myApp', ['ui.router']);

app.directive('backImg', function(){
    return function(scope, element, attrs){
        var url = attrs.backImg;
        element.css({
            'background-image': 'url('+url+')'  ,
            'background-size' : 'cover'
        });
    };
});


app.config(function($stateProvider,$urlRouterProvider){
    
    $stateProvider
    
    .state('home',{
        url:'/',
        templateUrl:'templates/home.html',
        controller:"HomeCtrl"
    })
    .state('contacts',{
        url:'/contacts',
        templateUrl:'templates/contacts.html',
        controller:"ContactsCtrl"
    })
    .state('about',{
        url:'/about',
        templateUrl:'templates/about.html',
        controller: "AboutCtrl"
    })
    .state('index',{
        url:'/index.html',
        templateUrl:'templates/home',
        controller: "mainCtrl"
    })
    .state('edit',{
        url:'/edit/:id',
        templateUrl:'structure/edit.html',
        controller:'EditCtrl'
    })
    .state('remove',{
        url:'/remove/:id',
        templateUrl:'structure/remove.html',
        controller:'RemoveCtrl'
    })
    
    $urlRouterProvider.otherwise("/");
    
});



app.controller('HomeCtrl',function($scope,$rootScope,$timeout,$state){

    $scope.Users = {};
        $scope.Save = function() {
            $scope.User.push($scope.Users);
            
            $timeout(function(){
                $state.go('contacts');
            })
        };
});

app.controller('ContactsCtrl',function($rootScope,$scope,$stateParams,$state,$timeout){
   
  
});

app.controller('AboutCtrl',function(){
    
});

app.controller('mainCtrl',function($scope){
    
    $scope.User = [{
            name: "Abhishek Singh",
	        email: "dave@g.com",
	        contactNo: "1122334455",
	        dob:"11.10.98",
	        gender:"Male",
	        comment:"Hi"
	    }, {
	        name: "Ashutosh Kumar",
	        email: "Mario@j.com",
	        contactNo: "2233445511",
	        dob:"11.10.91",
	        gender:"Male",
	        comment:"Hii"
	    }, {
	       name: "Abha Shukla",
	        email: "contra@a.com",
	        contactNo: "3344551122",
	        dob:"11.11.98",
	        gender:"Female",
	        comment:"Hiii"
	    }, {
	     name: "JoHn Snow",
	        email: "Winter@wall.com",
	        contactNo: "4455112233",
	        dob:"11.10.98",
	        gender:"Other",
	        comment:"Hey"
            }];   
    
});

app.controller('EditCtrl',
function($scope, $stateParams, $state, $timeout) {
$scope.Users = $scope.User[$stateParams.id];
$scope.edit = function() {
    $scope.contacts[$stateParams.id] = $scope.Users;
    $timeout(function(){
        $state.go('contacts');
    })
};
$scope.Save = function() {
            
            
            $timeout(function(){
                $state.go('contacts');
            })
        };
});

app.controller('RemoveCtrl',
    function($scope, $stateParams, $timeout, $state) {
        $scope.Users = $scope.User[$stateParams.id];
        $scope.remove = function() {
            $scope.User.splice($stateParams.id, 1);
            $timeout(function(){
                $state.go('contacts');
            })
            
        };
       $scope.back = function() {
           $timeout(function(){
               $state.go('contacts'); 
           })
           
        };
    });


