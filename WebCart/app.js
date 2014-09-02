var myAppModule = angular.module('myApp', []);

myAppModule.controller('CartController',
    function($scope){
        var items  = [{productName:"Atún", price:100},
                      {productName:"Pasta", price:50}];
        $scope.items = items;

    });

myAppModule.controller('TextController',
    function($scope) {
        var someText = {};
        someText.message = 'You have started your journey.';
        $scope.someText = someText;
    });

/*
myAppModule.controller("StartUpController",
    function($scope){
        $scope.funding = {startingEstimate :0};


        var computeNeeded = function(){
            $scope.funding.needed = $scope.funding.startingEstimate * 10;
        }
        $scope.computeNeeded = function(){
            $scope.funding.needed = $scope.funding.startingEstimate * 10;
        };


        $scope.$watch('funding.startingEstimate',computeNeeded);

    });
*/


myAppModule.controller("StartUpController",
    function($scope){
        $scope.funding = {startingEstimate :0};

        $scope.computeNeeded = function()
        {
          $scope.funding.needed = $scope.funding.startingEstimate * 10;
        };

        $scope.requestFunding = function()
        {
            window.alert("Sorry, please get more customers first.");
        };

        $scope.reset = function()
        {
          $scope.funding.startingEstimate = 0;
          $scope.funding.needed = 0;
        };
    });


/*
var someText = "Esta es ua prueba de sometext"
function CartController($scope)
{
    $scope.items = [
                    {productName:"Atun",
                     price: 100}]

}

*/
/*
 var myApp = angular.controller('CartController',function($scope){

 $scope.items = [
 {productName:"Atun", price: 100}
 ];
 })

 */