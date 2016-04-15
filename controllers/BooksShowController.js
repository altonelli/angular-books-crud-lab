angular.module('libraryApp')
  .controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
  var vm = this;


  vm.showBook = function(){
    $http({
      method: 'GET',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function successCallback(res){
      vm.book = res.data;
    });
  };

  vm.showBook();

  vm.deleteBook = function(){
    $http({
      method: 'DELETE',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id
    }).then(function successCallback(res){
      $location.path('/');
    });
  };

  vm.editBook = function(){
    $http({
      method: 'PUT',
      url: 'https://super-crud.herokuapp.com/books/' + $routeParams.id,
      data: vm.book
    }).then(function successCallback(res){
      $location.path('/');
    });
  };

};
