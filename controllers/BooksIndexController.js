angular.module('libraryApp')
  .controller('BooksIndexController', BooksIndexController);

BooksIndexController.$inject=['$http'];
function BooksIndexController( $http ) {
  var vm = this;

  vm.newBook = {};

  $http({
    method: 'GET',
    url: 'https://super-crud.herokuapp.com/books'
  }).then(function successCallback(res){
    vm.books = res.data.books;
  }, function errorCallback(err){
    console.log(err);
  });

  vm.createBook = function(){
    $http({
      method: 'POST',
      url: 'https://super-crud.herokuapp.com/books/',
      data: vm.newBook
    }).then(function successCallback(res){
      console.log(res.data);
      vm.books.push(res.data);
    });
  };

}
