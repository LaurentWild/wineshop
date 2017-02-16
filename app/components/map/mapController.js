angular.module("map")
    .controller("mapController", ["$http", function mapController($http) {


        $http.get("../json/markets.json").then((response) => {
              marketsCollection = new Markets(response.data)
              this.markets = marketsCollection.data;
            })


        // initialize the map on the "map" div with a given center and zoom
        let map = L.map('mapid', {
            center: [44.83, -0.57],
            zoom: 17
        });

        // let map = L.map('mapid').setView([-0.505, 44.09], 13);
        //
        //
        L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);
        //
        L.marker([44.83, -0.57]).addTo(map)
            .bindPopup('Wine<br>Shop')
            .openPopup();
    }])
