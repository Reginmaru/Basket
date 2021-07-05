let dict = require("../src/dict");
let Item = require("../src/item");
let Bagel = require("../src/bagel");

class Basket {
  // class for basket
  constructor(capacity) {
    this._item = [];
    this._capacity = capacity;
    //constructing array
  }

  // exists(item) {
  //     if (this._item.includes(item)) {
  //         console.log("Sorry! You already have this item!");
  //         return true;
  //     } else {
  //         return false;
  //     }
  // }

  // this was cropped out because it was contradicting the special offer function
  // addItem(item) {
  //     let boo = this.exists(item);
  //     if (boo === false) {
  //         if (this._item.length < this._capacity) {
  //             this._item.push(item);
  //         } else {
  //             console.log("Sorry! This basket is full!");
  //         }
  //         return this._item;
  //     }
  // }

  addItem(item) {
    if (this._item.length < this._capacity) {
      this._item.push(item);
    } else {
      console.log("Sorry! This basket is full!");
    }
    return this._item;
  }

  totalPrice() {
    // console.log(this.contents)
    let sum = 0;
    let BGL0 = 0;
    let BGLE = 0;
    let BGLP = 0;
    let COF = 0;
    for (let i = 0; i < this._item.length; i++) {
      let item = new Item();
      //console.log(`this is the item ${this._item[i]} this is the price ${item.checkPrice(this._item)}`);
      let word = this._item[i].split(" ");
      console.log(word[1]);
      if (word[0] == "Bagel") {
        let bagel = new Bagel(word[1]);

      }

      // for (let num in dict) {
      //     // console.log(`${i} ${num}`)
      //     if (this._item[i] === num) {
      //         // console.log(`${i}, ${num}`);
      //         sum += dict[num];
      //     }
      // }
    }
    return sum;
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
    console.log(length_basket);
    console.log(this._capacity);
    if (length_basket >= this._capacity) {
      console.log(" the capacity is over the limit");
      console.log(`we will increase capacity by ${value}`);
      this._capacity += value;
      console.log(this._capacity);
    }
    return this._capacity;
  }
}
basket = new Basket(9);
basket.addItem("bagel onion");
basket.addItem("bagels plain");
basket.addItem("bagels everything");
basket.addItem("bagels plain");
basket.addItem("bagels plain");
basket.addItem("bagels plain");
basket.addItem("bagels plain");
basket.addItem("bagels plain");
// console.log(basket._item)

console.log(basket.totalPrice());

module.exports = Basket;
