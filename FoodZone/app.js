var app = angular.module('gAuth',['ngRoute']);

app.config(function ($routeProvider){
    $routeProvider
    .when('/',{
        templateUrl:'login.html',
        controller:'loginCtrl'
    })
    .when('/about',{
        templateUrl:'about.html'
    });
});

app.controller('loginCtrl',function($scope,$http){
    $http({
        method:'GET',
        url:'/about'
    }).then(function loginsuccess(response){

    },function loginError(response){

    });
});

