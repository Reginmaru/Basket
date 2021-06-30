const assertEquals= require("./../test-framework")
const Basket= require("./../src/basket")
const item= require("./../src/item")

let input, result, result2, result3, result4;
//SETUP ADD FUNCITON
console.log("can add one item");
basket = new Basket()

//EXECUTE ADD FUNCTION
result=basket.addItem("bagel")

//VERIFY ADD FUNCTION
console.log(assertEquals(result.length,1))

//SETUP ADD FUNCITON
console.log('')
console.log("can add two items");
basket = new Basket()

//EXECUTE ADD FUNCTION
result=basket.addItem("bagel")
result2 = basket.addItem("bagel small");

//VERIFY ADD FUNCTION
console.log(assertEquals(result2.length, 2));


//SETUP REMOVE FUNCITON
console.log("")
console.log("can remove one item");

basket = new Basket()
basket.addItem("bagel");

//EXECUTE ADD FUNCTION
result=basket.removeItem("bagel")

//VERIFY ADD FUNCTION
console.log(assertEquals(result.length,1))
console.log(result)
console.log(`this is basket ${basket}`);
console.log(assertEquals(result.includes("bagel small"), false))
console.log(assertEquals(result.includes("bagel"), false));

//SETUP CHANGE_CAPACITY FUNCITON
console.log("")
console.log("can change capacity");

basket = new Basket()
result = basket.addItem("bagel");
result2 = basket.addItem("bagel small");
result3 = basket.addItem("bagel2");
result4 = basket.addItem("bagel small2");

//EXECUTE ADD FUNCTION
result=basket.change_capacity(2)

//VERIFY ADD FUNCTION
console.log(assertEquals(result, 6))



