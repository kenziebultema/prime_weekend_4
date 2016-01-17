/**
 * Created by ulaeulaeulae on 1/17/16.
 */
var app = angular.module('myApp', []);
//angular.module('', ['ui.bootstrap']);

app.controller('mainController', ['$scope', 'actualAssignment', function($scope, actualAssignment){
    $scope.thing = actualAssignment.testThing;

    actualAssignment.keyThing();
}]);

app.factory('actualAssignment', ['$http', function($http){
    var gitHubUsername = 'kenziebultema';
    var test = {};

    var thing = function(){
        $http.jsonp('https://api.github.com/users/' + gitHubUsername + '/events?callback=JSON_CALLBACK').then(function(response) {
        test.data = response.data.data;
    });
    };
    return {
        keyThing: thing,
        testThing: test
    };

}]);