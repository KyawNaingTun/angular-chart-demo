(function () {
  'use strict';
    var app = angular.module("chartApp", ["chart.js"]);
        app.config(function (ChartJsProvider) {
            // Configure all charts
            ChartJsProvider.setOptions({
                colours: ['#97BBCD', '#DCDCDC', '#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
                responsive: true
            });
            // Configure all doughnut charts
            ChartJsProvider.setOptions('Doughnut', {
                animateScale: true
            });
        });
        app.factory('Stone', function ($http) {
            return {
                get : function() {
                    return $http.get('http://mgl.knt.com/public/api/stones');
                }
            }
        });
        app.controller("chartCtrl", function ($scope, Stone) {
            $scope.labels = [];
            $scope.data = [];
            $scope.series=["SeriesA", "SeriesB", "SeriesC"];
            $scope.type = 'PolarArea';

            Stone.get()
                .success(function(data){
                    angular.forEach(data, function(rep){ //For loop
                        $scope.labels.push(rep.shape);// to push in array of labels
                        $scope.data.push(rep.stone_count);// to push in array of data
                    });
                })
                .error(function(data){
                    console.log(data);
                });
            
            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        });
})();
