'use strict'
class Owner {

  constructor(api){
    this.id = api._id;
    this.lastname = api.lastname;
    this.firstname = api.firstname;
    this.email = api.email;
  }
	
}