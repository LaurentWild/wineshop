'use strict'
class Wines {

  constructor(winesJSON) {
    this.data = [];

    winesJSON.sort((cur, next) => {
      return cur.id - next.id;
    }).forEach((sJSON) => {
      let wine = new Wine(sJSON);

      this.data.push(wine);
    })

    // Important for "filter" exercise - little hint here ;)
    this.unfilteredData = this.data;
  }
}
