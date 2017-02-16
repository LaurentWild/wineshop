'use strict'
class Markets {

    constructor(marketsAPI) {
        this.data = [];

        marketsAPI.forEach((mAPI) => {
            let market = new Market(mAPI);
            this.data.push(market);
        })

        // Important for "filter" exercise - little hint here ;)
        this.unfilteredData = this.data;
    }
}
