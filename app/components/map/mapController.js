angular.module("map")
    .controller("mapController", ["$http", "$scope", function mapController($http, $scope) {
        // INIT MAP
        let map = L.map('mapid', {
            center: [44.83, -0.57],
            zoom: 14,
            zoomControl: false
        });
        // LAYER
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
        // MARKETS
        let marketsCollection;
        // ORDER BY NAME
        this.orderProp = 'name';
        // GET JSON
        $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
            marketsCollection = new Markets(response.data)
            this.markets = marketsCollection.data;
            // FOR EACH MARKET
            for (let market of this.markets) {
                // ON MARKER CLICK
                let onMarkerClick = (e) => {
                    // console.log(e)
                    // console.log(this)
                    // console.log(e.target.options.myCustomName, e.target.options.myCustomDesc)

                    $scope.marketName = e.target.options.myCustomName;
                    $scope.marketDesc = e.target.options.myCustomDesc;
                    $scope.marketProducts = e.target.options.myCustomProducts;

                    $scope.showMarketPlacer = true;
                    // $scope.marketTab = `<p>w${e.target.options.myCustomName}<br />${e.target.options.myCustomDesc}</p>`;
                    // AFFICHE MARKER DETAILS
                    $scope.markerDetail = true;
                    // HIDE LISTS
                    $scope.marketsDiv = true;
                    $scope.ownersDiv = true;
                    $scope.productsDiv = true;
                    $scope.$apply()
                }
                // FOMAT POSITION
                let posTab = [market.position.split(", ")[0], market.position.split(", ")[1]];
                var marker = L.marker(posTab, {
                    myCustomId: market.id,
                    myCustomName: market.name,
                    myCustomDesc: market.description,
                    myCustomProducts: market.products
                });
                // POP UP
                marker.bindPopup(market.name);
                // CLICK
                marker.on('click', onMarkerClick);

                // ADD TO MAP
                marker.addTo(map);
            }
        })
    }])
