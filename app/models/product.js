'use strict'
class Product {

  constructor(api){
    this.id = api._id;
    this.name = this.firstUp(api.name);
    this.description = api.description;
    this.pictureURL = api.picture;
    //this.ownerID = api.owner;
		this.all = api;
  }
	
	firstUp(string){
		return string.charAt(0).toUpperCase() + string.slice(1);
	}
	
}