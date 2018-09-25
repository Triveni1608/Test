(function () {
    'use strict';

    angular
        .module('app')
        .factory('UserService', Service);

    function Service($http, $q) {
        var service = {};

        service.GetCurrent = GetCurrent;
        service.GetAll = GetAll;
        service.GetById = GetById;
        service.GetByUsername = GetByUsername;
        service.Create = Create;
        service.Update = Update;
        service.Delete = Delete;
        service.GetAllPost = GetAllPost;
        service.editPost = editPost;
        service.deletePost = deletePost;
        service.getPostDetails = getPostDetails;

        return service;

        function GetCurrent() {
            return $http.get('/api/users/current').then(handleSuccess, handleError);
        }

        function GetAllPost() {
            return $http.get('https://jsonplaceholder.typicode.com/posts').then(handleSuccess, handleError);
        }

         function editPost(id) {
            return $http.put('https://jsonplaceholder.typicode.com/posts/'+id).then(handleSuccess, handleError);
        }

         function deletePost(id) {
            return $http.delete('https://jsonplaceholder.typicode.com/posts/'+id).then(handleSuccessForDelete, handleError);
        }

        function getPostDetails(){
             return $http.get('https://jsonplaceholder.typicode.com/posts/1/comments').then(handleSuccess, handleError);
        }

        function GetAll() {
            return $http.get('/api/users').then(handleSuccess, handleError);
        }

        function GetById(_id) {
            return $http.get('/api/users/' + _id).then(handleSuccess, handleError);
        }

        function GetByUsername(username) {
            return $http.get('/api/users/' + username).then(handleSuccess, handleError);
        }

        function Create(user) {
            return $http.post('/api/users', user).then(handleSuccess, handleError);
        }

        function Update(user) {
            return $http.put('/api/users/' + user._id, user).then(handleSuccess, handleError);
        }

        function Delete(_id) {
            return $http.delete('/api/users/' + _id).then(handleSuccess, handleError);
        }

        // private functions

        function handleSuccess(res) {
            return res.data;
        }

        function handleSuccessForDelete(res){
            return;
        }

        function handleError(res) {
            return $q.reject(res.data);
        }
    }

})();
