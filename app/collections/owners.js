'use strict'
class Owners{

  constructor(ownersAPI) {
    this.data = [];

    ownersAPI.forEach((mAPI) => {
      let owner = new Owner(mAPI);

      this.data.push(owner);
    })

    // Important for "filter" exercise - little hint here ;)
    this.unfilteredData = this.data;
  }
}
