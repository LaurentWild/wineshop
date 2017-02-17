angular.module("ownerList").controller("ownerListController", ["$http", "$scope", function ownerListController($http, $scope) {
    let ownersCollection;
    this.orderProp = 'name';

    $http.get("http://wine.wildcodeschool.fr/api/v1/owners").then((response) => {
        ownersCollection = new Owners(response.data)
        this.owners = ownersCollection.data;
        $scope.showOwnerPlacer = false;

        // FOR EACH OWNER
        for (let owner of this.owners) {
            // ON OWNER CLICK
            this.ownerNameClick = (e) => {
                // console.log(e)
                console.log(this)

                $scope.ownerName = owner.name;
                $scope.ownerDesc = owner.description;
                $scope.ownerProducts = owner.products;

                $scope.showOwnerPlacer = true;
            }
        }
    })

}])
