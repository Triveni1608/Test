(function () {
    'use strict';

    angular
        .module('app')
        .controller('PostDetails.IndexController', Controller);

    function Controller(UserService,$scope,FlashService, $location) {
        $scope.posts = null;
        $scope.id= 1;

        initController();

        function initController() {
            if($location.search().id)
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