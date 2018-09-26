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
            vm.post = post;

        }


        function editPost() {
            UserService.editPost(vm.post.id)
                .then(function () {
                    FlashService.Success("Post Id" + vm.post.id + " Updated Successfuly");
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
                    FlashService.Success("Post Id" + vm.postId + " Deleted Successfuly");
                    $('#myModalForDelete').modal('hide');
                })
                .catch(function (error) {
                    FlashService.Error(error);
                });
        }



    }

})();