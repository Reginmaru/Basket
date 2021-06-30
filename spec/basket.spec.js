const assertEquals= require("./../test-framework")
const Basket= require("./../src/basket")
const item= require("./../src/item")

let input, result 
//SETUP ADD FUNCITON
basket = new Basket()

//EXECUTE ADD FUNCTION
result=basket.addItem("bagel")

//VERIFY ADD FUNCTION
console.log("can add one item")
console.log(assertEquals(result.length,1))


