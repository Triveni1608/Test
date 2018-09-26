(function () {
    'use strict';

    angular
        .module('app')
        .controller('Home.IndexController', Controller);

    function Controller(UserService,$scope) {
        var vm = this;

        vm.posts = null;

        initController();

        function initController() {
            // get current user
            UserService.GetAllPost().then(function (post) {
                vm.posts = post;
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
        series: [{
            text: "post1",
            values: [4660],
            backgroundColor: "#FA6E6E #FA9494",
        }, {
            text: "post2",
            values: [1807],
            backgroundColor: "#F1C795 #feebd2"
        }, {
            text: "post3",
            values: [1611],
            backgroundColor: "#FDAA97 #FC9B87"
        }, {
            text: "post4",
            values: [1341],
            backgroundColor: "#28C2D1"
        }, {
            text: "post5",
            values: [1269],
            backgroundColor: "#D2D6DE",
        }]
       }
    }

})();