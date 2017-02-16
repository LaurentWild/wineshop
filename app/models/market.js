'use strict'
class Market {

    constructor(json) {
        this.name = json.name;
        this.position = json.position;
        this.description = json.description;
    }
}
