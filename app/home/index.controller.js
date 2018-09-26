(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService,$scope) {
        var vm = this;

        vm.posts = null;
        vm.sortedDataARRAY = [];

        initController();

        function initController() {
            // get current user
            UserService.GetAllPost().then(function (post) {
                vm.posts = post;
                var sortedData = {};
                for(var i in vm.posts){
                    if(!sortedData[vm.posts[i].userId]){
                        sortedData[vm.posts[i].userId] = 1;
                    } else {
                        sortedData[vm.posts[i].userId] = sortedData[vm.posts[i].userId] + 1;
                    }
                }
                for (var key in sortedData) {
                    var data = {
                        text: "User" + key,
                        values: [sortedData[key]]
                    }
                    vm.sortedDataARRAY.push(data);
                }
            });
        }

       $scope.myJson = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",

        legend: {
            layout: "x5",
            position: "50%",
            borderColor: "transparent",
            marker: {
                borderRadius: 10,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v requests"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "15px",
                textAlpha: 1,
            }
        },
        series: vm.sortedDataARRAY
       }
    }

})();