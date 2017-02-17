angular.module("marketList").controller("marketListController", ["$http", "$scope", function marketListController($http, $scope) {
    let marketsCollection;

   // GET JSON
    $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
        marketsCollection = new Markets(response.data)
        this.markets = marketsCollection.data;

        // FOR EACH MARKET
        for (let market of this.markets) {
            // ON MARKER CLICK
            this.marketNameClick = (e) => {
                // console.log(e)
                console.log(this)

                $scope.marketName = market.name;
                $scope.marketDesc = market.description;
                $scope.marketProducts = market.products;

                $scope.showMarketPlacer = true;
            }
        }
    })

}])
