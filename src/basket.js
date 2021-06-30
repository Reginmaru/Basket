class Basket {// class for basket
    constructor(){
        this._item= []
 //constructing array

    }
    addItem(items){// insert item to array

        this._item.push(items)
        // returns array
        return this._item;

    }
}
let basket = new Basket("bagel")
module.exports= Basket;