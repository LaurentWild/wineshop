'use strict'
class Products{

  constructor(productsAPI) {
    this.data = [];

    productsAPI.forEach((API) => {
      let product = new Product(API);
      this.data.push(product);
    })

    // Important for "filter" exercise - little hint here ;)
    this.unfilteredData = this.data;
  }
}
