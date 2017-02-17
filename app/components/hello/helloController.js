angular.module("hello")
    .controller("helloController", ["$http", "$scope", function helloController($http, $scope) {


        // // MARKETS
        // let marketsCollection;
        // // GET JSON
        // $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
        //     marketsCollection = new Markets(response.data)
        //     this.markets = marketsCollection.data;
        // })
        // $http.get("http://wine.wildcodeschool.fr/api/v1/owners").then((response) => {
        //     ownersCollection = new Owners(response.data)
        //     this.owners = ownersCollection.data;
        // })
        // $http.get("http://wine.wildcodeschool.fr/api/v1/wines").then((response) => {
        //     productsCollection = new Products(response.data)
        //     this.products = productsCollection.data;
        // })
        console.log($scope.markets)


    }])
