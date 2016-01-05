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
        app.controller("chartCtrl", function ($scope) {
            $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
            $scope.series = ['Series A', 'Series B'];
            $scope.data = [
                [65, 59, 80, 81, 56, 55, 40],
                [28, 48, 40, 19, 86, 27, 90]
            ];
            // for donut data
            $scope.donutLabels = ["Download Sales", "In-Store Sales", "Mail-Order Sales"];
            $scope.donutData = [300, 500, 100];

            $scope.onClick = function (points, evt) {
                console.log(points, evt);
            };
        });
})();
