(function(){
    var app = angular.module('hotelsModule',['ngRoute']);
    
    app.config(function($routeProvider)
    {
        $routeProvider
        .when('/',
            {
               controller : 'hotelsController',
                templateUrl : '/hotelApp/views/restaurants.html'
            })
            .when('/restaurants/:restid',
            {
               controller : 'detailsController',
                templateUrl : '/hotelApp/views/details.html'
            });
        //.otherwise({redirectTo : '/'});
    });
}());
