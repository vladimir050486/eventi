var app = angular.module('enveti',['ngRoute','ngResource','angularFileUpload','ngAnimate','youtube-embed','uiGmapgoogle-maps','ngAutocomplete','wu.masonry','mgcrea.ngStrap']);



    app.config(function($routeProvider,$locationProvider)
    {
        $locationProvider.html5Mode(true);
        // Register routes with the $routeProvider
        $routeProvider
            .when('/', {
                templateUrl:"parts/home.html",
                controller:'home'
            })
            .when('/registerUser',{
                templateUrl:'parts/registerUser.html',
                controller:'registerUser'
            })
            .when('/maintainUser:user',{
                templateUrl: 'parts/maintainUser.html',
                controller:'maintainUser'
            })
            .when('/loggedUser:sn',{
                templateUrl:'parts/loggedUser.html',
                controller:'loggedUser'
            })
            .when('/createEvent',{
                templateUrl:'parts/createEvent.html',
                controller:'createEvent'
            })
            .when('/infoEvent:eventId',{
                templateUrl:'parts/infoEvent.html',
                controller:'infoEvent'
            })
            .when('/maintainEvents',{
                templateUrl:'parts/maintainEvents.html',
                controller:'maintainEvents'
            })
            .when('/manageEvent',{
                templateUrl:'parts/manageEvent.html',
                controller:'manageEvent'
            })
            .when('/infoUser:userId',{
                templateUrl:'parts/infoUser.html',
                controller:'infoUser'
            })
            .when('/makeChangesEvent:eventId',{
                templateUrl:'parts/makeChangesEvent.html',
                controller:'makeChangesEvent'
            })
            .when('/myMessages:userId',{
                templateUrl:'parts/myMessages.html',
                controller:'myMessages'
            })
            .otherwise({
                redirectTo: '/'
            });
    });






