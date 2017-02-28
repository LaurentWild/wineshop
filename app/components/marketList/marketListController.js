angular.module("marketList").controller("marketListController", ["$http", "$scope", function marketListController($http, $scope) {
    let marketsCollection;

    $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
        marketsCollection = new Markets(response.data)
        this.markets = marketsCollection.data;
				
				$scope.showMarketPlacer = false;
		
				// ON MARKER CLICK
				this.marketNameClick = (e) => {
						console.log(e)

						$scope.marketName = e.name;
						$scope.marketDesc = e.description;
						$scope.marketProducts = e.products;

						$scope.showMarketPlacer = true;
				}
    })

}])
