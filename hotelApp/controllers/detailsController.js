var detailsController = function ($scope, $routeParams)
        {
            var restId = $routeParams.restid;
            $scope.details = null; 
            
            $scope.init = function () 
            {
                
                for(var i=0;i<$scope.hotels.length;i++)
                {
                    if($scope.hotels[i].id === parseInt(restId)){
                        $scope.details = $scope.hotels[i].city;
                        break;
                    }
                }
                
                
            }
            
           $scope.hotels = [
                {
                    id :1,
                    details :[
                        {
                            name:'Taj Indian Restaurant',
                            city:'Seattle'
                        }
                    ]                    
                },
                {
                    id :2,
                    name:'Bangkok Point',
                    city:'Atlanta'
                }
            ];
            
            $scope.init();
            
        };

        //hotelsController.$inject = ['$scope'];
    
        angular.module('hotelsModule')
        .controller('detailsController',['$scope','$routeParams',detailsController]);      
        