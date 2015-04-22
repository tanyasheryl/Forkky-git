// option 1
    /*    app.controller('hotelsController',function ($scope)
        {
            $scope.hotels = [
                {name:'Thai Hut',city:'Seattle'},
                {name:'Bangkok Point',city:'Atlanta'}
            ];
            $scope.doSort =function(propname)
            {
                $scope.sortBy = propname;
                $scope.reverse = !$scope.reverse;
            };
        });      
        
        */

// option 2
       /* angular.module('hotelsModule')
        .controller('hotelsController',function ($scope)
        {
            $scope.hotels = [
                {name:'Thai Hut',city:'Seattle'},
                {name:'Bangkok Point',city:'Atlanta'}
            ];
            $scope.doSort =function(propname)
            {
                $scope.sortBy = propname;
                $scope.reverse = !$scope.reverse;
            };
        });      */
        
    
// option 3

var hotelsController = function ($scope)
        {
            $scope.hotels = [
                {name:'Thai Hut',city:'Seattle'},
                {name:'Bangkok Point',city:'Atlanta'}
            ];
            $scope.doSort =function(propname)
            {
                $scope.sortBy = propname;
                $scope.reverse = !$scope.reverse;
            };
        };

        //hotelsController.$inject = ['$scope'];
    
        angular.module('hotelsModule')
        .controller('hotelsController',['$scope',hotelsController]);      
        