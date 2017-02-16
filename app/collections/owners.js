'use strict'
class owners {

  constructor(ownersJSON) {
    this.data = [];

    ownersJSON.sort((cur, next) => {
      return cur.id - next.id;
    }).forEach((sJSON) => {
      let owner = new Owner(sJSON);
      this.data.push(owner);
    })
    // Important for "filter" exercise - little hint here ;)
    this.unfilteredData = this.data;
  }
}
