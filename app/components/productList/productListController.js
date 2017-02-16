angular.module("marketList").controller("marketListController", ["$http", function marketListController($http) {
  let marketCollection;
  this.orderProp = 'name';

  $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
    marketsCollection = new Markets(response.data)
    this.markets = marketsCollection.data;
  }) 
	
}])