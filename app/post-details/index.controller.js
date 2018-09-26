(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostDetails.IndexController', Controller);

    function Controller(UserService,$scope,FlashService, $location) {
        var vm = this;

        $scope.posts = null;
        $scope.id= 0;

        initController();

        function initController() {
            $scope.id = $location.search().id;
           getPostDetails();

        }

        function getPostDetails() {
            UserService.getPostDetails($scope.id)
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