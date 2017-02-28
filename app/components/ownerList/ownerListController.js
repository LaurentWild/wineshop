angular.module("ownerList").controller("ownerListController", ["$http", "$scope", function ownerListController($http, $scope) {
    let ownersCollection;
		
    $http.get("http://wine.wildcodeschool.fr/api/v1/owners").then((response) => {
        ownersCollection = new Owners(response.data)
        this.owners = ownersCollection.data;
				
        $scope.showOwnerPlacer = false;

				// ON OWNER CLICK
				this.ownerNameClick = (e) => {
						// console.log(e)
						console.log(e)

						$scope.ownerName = e.fullname;
						$scope.ownerEmail = e.email;
						
						$http.get("http://wine.wildcodeschool.fr/api/v1/owners/:"+e.id+"/products").then((response) => {
							productsCollection = new Products (response.data)
							this.products = productsCollection.data;
							
							for (let product of this.products) {
								console.log("OEE  " + this);
							}
						})

						$scope.showOwnerPlacer = true;
				}
				
    })

}])
