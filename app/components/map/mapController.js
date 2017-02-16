angular.module("map")
    .controller("mapController", ["$http", "$scope", function mapController($http, $scope) {


        // INIT MAP
        let map = L.map('mapid', {
            center: [44.83, -0.57],
            zoom: 14,
            zoomControl:false
        });

        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        let marketsCollection;
        this.orderProp = 'name';

        $http.get("http://wine.wildcodeschool.fr/api/v1/markets").then((response) => {
            marketsCollection = new Markets(response.data)
            this.markets = marketsCollection.data;
            // FOR EACH MARKET
            for (let market of this.markets) {
                // FOMAT POSITION
                let posTab = [market.position.split(", ")[0], market.position.split(", ")[1]];
                // ADD MARKET MARKER
                L.marker(posTab).addTo(map)
                    .bindPopup(market.name)
                    .openPopup().on('click', onClick);

                function onClick(e) {
                    this.marketTab = "khkjghg";
                }
            }
        })

        $scope.titlee = "ert";





    }])
