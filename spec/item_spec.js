const assertEquals = require("../test-framework");
let item = require("../src/item");

//First test
console.log("What is the price of Cream Cheese");

//1. Set Up
let creamCheese = new item("Cream Cheese");

//2. Exectute
let result = creamCheese.checkPrice();

//3.Verify
console.log(assertEquals(result, 2));
