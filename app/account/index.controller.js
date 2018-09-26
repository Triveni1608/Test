(function () {
    'use strict';

    angular
        .module('app')
        .controller('Account.IndexController', Controller);

    function Controller($window, UserService, FlashService, $scope) {
        $scope.post = null;
        $scope.posts = [];
        $scope.openEditModal = openEditModal;
        $scope.editPost = editPost;
        $scope.deletePost = deletePost;
        $scope.openDeleteModal = openDeleteModal;
        $scope.postId = 0;
        getAllPost();

        function getAllPost() {
            UserService.GetAllPost()
                .then(function (post) {
                    $scope.posts = post;
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function openEditModal(post) {
            $('#myModal').modal('show');
            $scope.post = post;

        }


        function editPost() {
            UserService.editPost($scope.post.id)
                .then(function () {
                    FlashService.Success("Post Id" + $scope.post.id + " Updated Successfuly");
                    $('#myModal').modal('hide');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function openDeleteModal(id) {
            $('#myModalForDelete').modal('show');
            $scope.postId = id;
        }



        function deletePost() {
            UserService.deletePost($scope.postId)
                .then(function () {
                    FlashService.Success("Post Id" + $scope.postId + " Deleted Successfuly");
                    $('#myModalForDelete').modal('hide');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }



    }

})();