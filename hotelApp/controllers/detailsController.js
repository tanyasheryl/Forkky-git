var detailsController = function ($scope, $routeParams)
        {
            var restId = $routeParams.restid;
            $scope.details = null; 
            
         
            $scope.init = function () 
            {
                
                for(var i=0;i<$scope.hotels.length;i++)
                {
                    if($scope.hotels[i].id === parseInt(restId)){
                        $scope.details = $scope.hotels[i].details;
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
                            pic:'naancorner.jpg',
                            address: 'ITPL Main Road, Marathahalli', 
                            city:'Bangalore',
                            phone: '2860472',
                            cuisines: 'North Indian, Mughlai, Chinese',
                            hours: '11AM to 11 PM',
                            cost: '1000' 
                        }
                    ]                    
                },
                {
                    id :2,
                    details :[
                        {
                            name:'Biriyani Hut',
                            pic:'biriyani.jpg',
                            address: '6th Cross, New BEL Road,', 
                            city:'Mysore',
                            phone: '6667778889',
                            cuisines: 'Biriyani, Kabab',
                            hours: ' 6 PM to 11 PM',
                            cost: ' 400' 
                        }
                    ]                      
                },
                {
                    id :3,
                    details :[
                        {
                            name:'Chettinad Corner',
                            address: '1st Cross, 5th Block, Koramangala, Behind Sukh Sagar,', 
                            city:'Hyderabad',
                            phone: '21796390',
                            cuisines: 'Malabar, Kerala',
                            hours: ' 11 AM to 11 PM',
                            cost: '700' 
                        }
                    ]   
                },
                {
                    id :4,
                    details :[
                        {
                           name:'Kumarakom Hut',
                            address: '4th Sector, HSR Layout', 
                            city:'Kochi',
                            phone: '4767635799',
                            cuisines: 'Kerala, South Indian',
                            hours: '9 AM to 11 PM',
                            cost: '700' 
                        }
                    ]        
                }
               
            ];
            $scope.init();
            
        };

        //hotelsController.$inject = ['$scope'];
    
        angular.module('hotelsModule')
        .controller('detailsController',['$scope','$routeParams',detailsController]);      
        