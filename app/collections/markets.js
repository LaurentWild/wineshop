'use strict'
class Markets {

  constructor(marketsJSON) {
    this.data = [];

    marketsJSON.sort((cur, next) => {
      return cur.id - next.id;
    }).forEach((sJSON) => {
      let wine = new Wine(sJSON);

      this.data.push(wine);
    })

    // Important for "filter" exercise - little hint here ;)
    this.unfilteredData = this.data;
  }
}
