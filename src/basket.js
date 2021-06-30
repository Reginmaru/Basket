class Basket {
    // class for basket
    constructor() {
        this._item = [];
        this._capacity = this._capacity;
        //constructing array
    }
    addItem(items) {
        // insert item to array

        this._item.push(items);
        // returns array
        return this._item;
    }

    removeItem(items) {
        //find the index of the item that wants to be deleted
        const index = this._item.indexOf(items);
        //Splice function takes in 3 parameters which are (index_of_item, How_many_item, what_item_)
        this._item.splice(index, 1);

        return this._item;
    }

    change_capacity(value) {
        let length_basket = this._item.length;
        this._capacity = 4;
        console.log(length_basket);
        console.log(this._capacity);
        if (length_basket >= this._capacity) {
            console.log(" the capacity is over the limit");
            console.log(`we will increase capacity by ${value}`);
            this._capacity += value;
            console.log(this._capacity)
        }
        return this._capacity
    }
}
basket = new Basket();
basket.addItem("bagels");
basket.addItem("bagels small");
basket.addItem("bagels 2");
basket.addItem("bagels small 2");
console.log(basket.change_capacity(2));

module.exports = Basket;