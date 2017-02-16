angular.module("productList").controller("productListController", ["$http", function productListController($http) {
  let productsCollection;
  this.orderProp = 'name';

  $http.get("http://wine.wildcodeschool.fr/api/v1/wines").then((response) => {
    productsCollection = new Products(response.data)
    this.products = productsCollection.data;
  }) 
	
}])