// Creating a roll class

class Roll{
    constructor(rollType, rollGlazing, packSize, rollPrice){
        this.type = rollType;
        this.glazing = rollGlazing;
        this.size = packSize;
        this.basePrice = rollPrice;
        this.element = null;
    }
}

// Creating set cart and adding items from local storage 
let cartSet = new Set();
let localCart = localStorage.getItem('cart');
if(localCart) cartSet = new Set(Array.from(JSON.parse(localCart)));


// Setting price for various packs and various glaze options

let packPriceAdaptation = {
    1:1,
    3:3,
    6:5,
    12:10,
}

let glazingPriceAdaptation = {
    "Keep Original":0.0,
    "Sugar Milk": 0.0,
    "Vanilla Milk": 0.5,
    "Double Chocolate": 1.5,
}


// Creating a DOM element of each cinnamon roll object 

let totalPrice = 0.0;

for (const cinnamonRoll of cartSet){
    createItem(cinnamonRoll);
}


// Function to calculate price per cinnamon roll

function cinnamonRollPrice(basePrice,size,glazing){
    console.log('inside cinnamonRollPrice', basePrice, size, glazing);
    const itemAmount = (basePrice + glazing)*size;
    console.log('inside cinnamonRollPrice', itemAmount);
    return itemAmount;
}


// Function for creating cinnamon roll items in cart 

function createItem(cinnamonRoll){
    const template = document.querySelector("#cinnamonroll-template");
    const clone = template.content.cloneNode(true);
    cinnamonRoll.element = clone.querySelector('.flexboxcartitems');

    const cinnamonRollListElement = document.querySelector('#cartitemlist');
    cinnamonRollListElement.append(cinnamonRoll.element);

    updateElement(cinnamonRoll);

    let cinnamonRollAmount = cinnamonRollPrice(cinnamonRoll.basePrice,packPriceAdaptation[cinnamonRoll.size],glazingPriceAdaptation[cinnamonRoll.glazing]);
    cinnamonRoll.element.querySelector(".price").innerText = "$ "+ cinnamonRollAmount.toFixed(2);

    totalPrice = totalPrice + parseFloat(cinnamonRollAmount);
    document.querySelector(".flexboxtotalprice > .price").innerText = "$ "+ totalPrice.toFixed(2);

    const removeItem = cinnamonRoll.element.querySelector(".remove");
    removeItem.addEventListener('click', () => {
        removeCinnamonRoll(cinnamonRoll)
    
    let total = document.querySelector(".flexboxtotalprice > .price").innerText.slice(2);
    document.querySelector(".flexboxtotalprice > .price").innerText = "$ "+ (total - cinnamonRollAmount).toFixed(2);

    });
}


// Function to update element 

function updateElement(cinnamonRoll){
    const cinnamonRollImage = cinnamonRoll.element.querySelector(".itemimage");
    const cinnamonRollGlaze = cinnamonRoll.element.querySelector("#glaze");
    const cinnamonRollName = cinnamonRoll.element.querySelector("#name");
    const cinnamonRollPackSize = cinnamonRoll.element.querySelector("#size");

    cinnamonRollImage.src = "HW1/products/" + cinnamonRoll.type.toLowerCase()+ "-cinnamon-roll.jpg";
    cinnamonRollName.innerText = cinnamonRoll.type + " Cinnamon Roll";
    cinnamonRollGlaze.innerText = "Glazing: "+ cinnamonRoll.glazing;
    cinnamonRollPackSize.innerText = "Pack Size: "+ cinnamonRoll.size;
}

// Function to delete cinnamon roll

function removeCinnamonRoll(cinnamonRoll){
    cinnamonRoll.element.remove();
    cartSet.delete(cinnamonRoll);
    localStorage.setItem('cart', JSON.stringify(Array.from(cartSet)));
    console.log(cartSet);
}

console.log(cartSet);


