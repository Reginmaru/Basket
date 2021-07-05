let dict = require("../src/dict");
let Bagel = require("../src/bagel");

class Item {
  constructor(name) {
    this.name = name;
  }

  list_of_item() {
    for (let i = 0; i < dict.length; i++) {
      cconsole.log(
        `${name} is name  + ${dict[name].SKU} is SKU and ${dict[name].price} is price `
      );
    }
  }

  checkPrice(name, flavour) {
    // console.log(item)
    // console.log(dict[item])
    for (let name in dict) {
      // console.log(`${name} is name  + ${dict[name].SKU} is SKU and ${dict[name].price} is price `)
      if (this.name === name) {
        if (this.name === "Bagel") {
          console.log(this.name)

          return bagel.flavourOfBagel(this.flavour);

        }
        console.log(`This is the price of ${this.name}: ${dict[name].price}`);
        return dict[name].price;
      }
    }
  }

}



let item = new Item("Bagel");
bagel = new Bagel("plain");
//console.log(item.list_of_item());
console.log(item.checkPrice("Bagel"));
// console.log(dict["Bagel"].SKU)

module.exports = Item;