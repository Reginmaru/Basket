let dict = require("../src/dict");

class Bagel {
  constructor(flavour) {
    this.SKU = dict["Bagel"].SKU;
    this.flavour = flavour;
    this.price = this.price;
  }

  flavourOfBagel() {
    switch (this.flavour) {
      case "onion": {
       this.SKU = "BGLO";
        this.price = 0.49;
        break;
      }
      case "plain": {
         this.SKU = "BGLP";
        this.price = 0.39;
        break;
      }
      case "everything": {
         this.SKU = "BGLE";
        this.price = 0.49;
        break;
      }
    }
    return this.price;
  }
}

module.exports = Bagel;
