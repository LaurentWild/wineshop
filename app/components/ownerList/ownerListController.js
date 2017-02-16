angular.module("ownerList").controller("ownerListController", ["$http", function ownerListController($http) {
  let ownersCollection;
  this.orderProp = 'name';

  $http.get("http://wine.wildcodeschool.fr/api/v1/owners").then((response) => {
    ownersCollection = new Owners(response.data)
    this.owners = ownersCollection.data;
  }) 
	
}])