(function () {
    'use strict';

    angular
        .module('app')
        .controller('Account.IndexController', Controller);

    function Controller($window, UserService, FlashService, $scope) {
        var vm = this;

        vm.post = null;
        $scope.posts = [];
        $scope.openEditModal = openEditModal;
        $scope.editPost = editPost;
        $scope.deletePost = deletePost;
        $scope.openDeleteModal = openDeleteModal;
        $scope.postId = 0;

        initController();

        function initController() {
            // get current user
            UserService.GetCurrent().then(function (user) {
                getAllPost();
            });
        }

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
            vm.post = post;

        }


        function editPost() {

            UserService.editPost(vm.post.id)
                .then(function () {
                    FlashService.Success(vm.post.id + " Post Id Updated Successfuly");
                    $('#myModal').modal('hide');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }

        function openDeleteModal(id) {
            $('#myModalForDelete').modal('show');
            vm.postId = id;
        }



        function deletePost() {
            UserService.deletePost(vm.postId)
                .then(function () {
                    FlashService.Success(vm.postId + " Post Id Deleted Successfuly");
                    $('#myModalForDelete').modal('hide');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }


    }

})();