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
    case "grocery", "household":
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
