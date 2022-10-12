class Roll {
    constructor(rollType, rollGlazing, packSize, rollPrice) {
        this.type = rollType;
        this.glazing =  rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
    }
}

let roll1 = new Roll("Original", "Sugar Milk", 1, 2.49);
let roll2 = new Roll("Walnut", "Vanilla Milk", 12, 3.49);
let roll3 = new Roll("Raisin", "Sugar Milk", 3, 2.99);
let roll4 = new Roll("Apple", "Original", 3, 3.49);

let cart = new Set();
cart.add(roll1);
cart.add(roll2);
cart.add(roll3);
cart.add(roll4);
console.log(cart);

let packPriceAdaptation = {
    1:1,
    3:3,
    6:5,
    12:10
}

let glazingPriceAdaptation = {
    "Original":0.0,
    "Sugar Milk": 0.0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5
}


function calculatePrice(basePrice, packPrice, glazingPrice){
    return((basePrice+glazingPrice)*packPrice);
}

let totalPrice = 0.0;

function fillCart(item){
    let cartitem = document.getElementsByTagName("template")[0];
    let cartitemClone = cartitem.content.cloneNode(true);
    let cartElement = cartitemClone.querySelector(".flexboxcartitems");

    cartElement.querySelector("#name").innerText = item.type + " Cinnamon Roll";
    cartElement.querySelector("#glaze").innerText = "Glazing: "+ item.glazing;
    cartElement.querySelector("#size").innerText = "Pack Size: "+ item.size;
    cartElement.querySelector("img").src = "HW1/products/"+item.type.toLowerCase()+"-cinnamon-roll.jpg";
    let itemPrice = calculatePrice(item.basePrice,packPriceAdaptation[item.size],glazingPriceAdaptation[item.glazing]).toFixed(2);;
    cartElement.querySelector(".price").innerText = "$ "+ itemPrice;

    totalPrice = totalPrice + parseFloat(itemPrice);
    document.querySelector("#totalPrice").innerText = "$ "+totalPrice;

    cartElement.querySelector(".remove").addEventListener("click",()=>{
        let total = document.querySelector("#totalPrice").innerText.slice(2);
        document.querySelector("#totalPrice").innerText = "$ " + (total - itemPrice).toFixed(2);
        cartElement.remove();

        cart.delete(item);
        console.log(cart);
    });


    document.querySelector(".flexboxcartitems").appendChild(cartitemClone);
}

for(item of cart){
    fillCart(item);
 }