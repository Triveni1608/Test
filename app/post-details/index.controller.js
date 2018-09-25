(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostDetails.IndexController', Controller);

    function Controller(UserService,$scope) {
        var vm = this;

        $scope.posts = null;

        initController();

        function initController() {
           getPostDetails();
        }

        function getPostDetails() {
            UserService.getPostDetails()
                .then(function (post) {
                    $scope.posts = post;
                    console.log($scope.posts)
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

      
    }

})();