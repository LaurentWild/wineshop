'use strict'
class Markets {

    constructor(marketsJSON) {
        this.data = [];

        marketsJSON.sort((cur, next) => {
            return cur.id - next.id;
        }).forEach((sJSON) => {
            let market = new Market(sJSON);
            this.data.push(market);
        })
        // Important for "filter" exercise - little hint here ;)
        this.unfilteredData = this.data;
    }
}
