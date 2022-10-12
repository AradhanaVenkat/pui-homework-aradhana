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

// Creating set cart
let cartSet = new Set();

// Adding items to the set cart

function addCinnamonRoll(type, glazing, size, basePrice){
    const cinnamonRoll = new Roll(type, glazing, size, basePrice);
    cartSet.add(cinnamonRoll);
    return cinnamonRoll
}

const rollOne = addCinnamonRoll(
    'Original', 
    'Sugar Milk', 
    1, 
    2.49
)

const rollTwo = addCinnamonRoll(
    'Walnut', 
    'Vanilla Milk', 
    12, 
    3.49
)

const rollThree = addCinnamonRoll(
    'Raisin', 
    'Sugar Milk', 
    3, 
    2.99
)

const rollFour = addCinnamonRoll(
    'Apple', 
    'Original', 
    3, 
    3.49
)


// Setting price for various packs and various glaze options

let packPriceAdaptation = {
    1:1,
    3:3,
    6:5,
    12:10,
}

let glazingPriceAdaptation = {
    "Original":0.0,
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
    const itemAmount = (basePrice + glazing)*size;
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

    let cinnamonRollAmount = cinnamonRollPrice(cinnamonRoll.basePrice,packPriceAdaptation[cinnamonRoll.size],glazingPriceAdaptation[cinnamonRoll.glazing]).toFixed(2);
    cinnamonRoll.element.querySelector(".price").innerText = "$ "+ cinnamonRollAmount;

    totalPrice = totalPrice + parseFloat(cinnamonRollAmount);
    document.querySelector(".flexboxtotalprice > .price").innerText = "$ "+ totalPrice;

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

    cinnamonRollImage.src = "HW1/products/" +cinnamonRoll.type.toLowerCase()+ "-cinnamon-roll.jpg";
    cinnamonRollName.innerText = cinnamonRoll.type + " Cinnamon Roll";
    cinnamonRollGlaze.innerText = "Glazing: "+ cinnamonRoll.glazing;
    cinnamonRollPackSize.innerText = "Pack Size: "+ cinnamonRoll.size;
}

// Function to delete cinnamon roll

function removeCinnamonRoll(cinnamonRoll){
    cinnamonRoll.element.remove();
    cartSet.delete(cinnamonRoll);
}


