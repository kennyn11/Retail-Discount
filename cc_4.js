// Create arrays of 5 products //
let products = [
{name: "Laptop", category: "electronics", price: 350, inventory: 75},
{name: "T-shirts", category: "apparel", price: 25, inventory: 100},
{name: "Mac n Cheese", category: "grocery", price: 10, inventory: 300},
{name: "Towel", category: "household", price: 20, inventory: 250},
{name: "Doll", category: "toys", price: 15, inventory: 85},
];

// Discounts based on category //
console.log("Discounted Items")
for (let product of products) {
    let discountRate = 0;
    switch (product.category) {
     case "apparel":
            discountRate = .15
            break;
    case "grocery":
    case "household":
        discountRate = .10
        break;
    case "electronics":
        discountRate = .20;
        break;
        default:
            discountRate = 0
    }
    product.discountPrice = product.price * (1-discountRate)
}
// CustomerType Discount // 
let customerType = "student"
function getCustomerDiscount(type) {
    if (type == "student"){
        return 0.05;
} else if (type === "senior") {
 return 0.07;
} else {
return 0;
}
}
let certainDiscount = getCustomerDiscount(customerType)

// Checkout Process //
let customerCheckout = [
[0,2], [2,4] , [1,3,2]

];
for (let i = 0; i <3; i++){
    let customerTotal = i + 1;
    let cartAmount = 0
console.log (`Customer ${customerTotal}:`)

for (let productIndex of customerCheckout[i]) {
    let product = products[productIndex]
    cartAmount += product.discountPrice
    --product.inventory;
}
let finalTotal = cartAmount * (1 - certainDiscount)
console.log(`Total after student discount: $${finalTotal.toFixed(2)}`);
}

// Single product discounts // 
for (let item in products[0])
    console.log(`${item}: ${products[0][item]}`)

// Log after inventory update //
for (let product of products) {
console.log(`\n${product.name}:`)
    for (let [name, data] of Object.entries(product))
        console.log(`${name}:${data}`)
    console.log(`${product.name}: ${product.inventory} left`);
}