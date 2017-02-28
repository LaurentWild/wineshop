angular.module("productList").controller("productListController", ["$http", "$scope", function productListController($http, $scope) {
  let productsCollection;

  $http.get("http://wine.wildcodeschool.fr/api/v1/wines").then((response) => {
    productsCollection = new Products(response.data)
    this.products = productsCollection.data;
		
		$scope.showProductPlacer = false;
			
		this.productNameClick = (e) => {
				 
				console.log(e)
					console.log(e);

					$scope.prodName = e.name;
					$scope.prodDesc = e.description;
					$scope.prodImage = e.pictureURL;

					$scope.showProductPlacer = true;
		}
		
  }) 
	
}])