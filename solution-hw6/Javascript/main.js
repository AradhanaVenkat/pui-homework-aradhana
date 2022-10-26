
// Creating a class for glaze
class RollGlaze {
    constructor(itemGlaze, price) {
      this.itemGlaze = itemGlaze
      this.price = price;
    }
  }


// Creating a class for size
class RollSize {
    constructor(itemSize, price) {
      this.itemSize = itemSize
      this.price = price;
    }
  }

// Creating objects for each glaze choices 
let keepOriginal = new RollGlaze("Keep Original", 0.00);
let sugarMilk = new RollGlaze("Sugar Milk", 0.00);
let vanillaMilk = new RollGlaze("Vanilla Milk", 0.50);
let doubleChocolate = new RollGlaze("Double Chocolate ", 1.50);

// Creating objects for each pack choices
let one = new RollSize("1", 1);
let three = new RollSize("3", 3);
let six = new RollSize("6", 5);
let twelve = new RollSize("12", 10);

// Selecting glazing dropdown element in variable glaze
let glaze = document.querySelector("#glazedropdown");

// Selecting glazing dropdown element in variable size
let donutSize = document.querySelector("#sizedropdown");

let selectedGlazeText = "Keep Original";


// Array of all the glaze options
let glazeArray = [keepOriginal, sugarMilk, vanillaMilk, doubleChocolate];


//Loop for creating glaze options in the dropdown
for(let i=0; i<glazeArray.length; i++) {
    optionGlaze = document.createElement('option');
    optionGlaze.text = glazeArray[i].itemGlaze;
    optionGlaze.value = glazeArray[i].price;
    glaze.add(optionGlaze);
}


// Array of all the size options
let glazeSize = [one, three, six, twelve]

let optionSize = " "
// Loop for creating size option in the dropdown
for(let i=0; i<glazeSize.length; i++){
    let sizeChoice = glazeSize[i]
    // console.log(sizeChoice)
    optionSize = document.createElement('option');
    optionSize.text = sizeChoice.itemSize
    optionSize.value = sizeChoice.price
    donutSize.add(optionSize);
}

// Variables for size and glaze and adding base value 
let selectedGlaze = 0.00;
let selectedSize = 1;

// Function to get the glaze value when glaze option is selected from the dropddown
function onGlazeChange(glaze) {
    selectedGlaze = glaze.value;
    computeFinalAmount();
}

// Creating a function to get the size value when glaze option is selected from the dropddown
function onSizeChange(donutSize) {
    selectedSize = donutSize.value;
    computeFinalAmount();
}

// Redirecting user to required URL and storing roll type as the key
const queryString = window.location.search; // ?roll=Original
const params = new URLSearchParams(queryString);
const rollType = params.get('roll'); // Original


// Extracting current roll information - image path, name and price 
// `string ${dynamic}`
// document.querySelector(".cinnamonroll").src='HW1/products/' + rolls[rollType].imageFile;
document.querySelector(".cinnamonroll").src=`HW1/products/${rolls[rollType].imageFile}`;   
document.querySelector(".header1").innerText=`${rollType} Cinnamon Roll`;
document.querySelector("#totalamount").innerText=rolls[rollType].basePrice;


// Computing final amount and displaying it in the amount container 
let finalAmount = "";
function computeFinalAmount() {
    let amountContainer = document.querySelector('#totalamount');

    // De-bugging code by adding Number(option) to ensure program takes in value as a number and not a string
    finalAmount = ((rolls[rollType].basePrice + Number(selectedGlaze)) * Number(selectedSize)).toFixed(2);
    amountContainer.textContent = finalAmount;
}


// --------------------- Homework 6 --------------------------


// Creating class roll and updating cinnamon roll information in array when add to cart button is clicked
let cart = [];


class Roll{
  constructor(rollType,rollGlazing, packSize, basePrice){
    this.type = rollType;
    this.glazing =  rollGlazing;
    this.size = packSize;
    this.basePrice = basePrice;
  }
}

// Saving to local Storage

function saveToLocalStorage(){
  const cartString = JSON.stringify(cart);
  console.log(cartString)
  localStorage.setItem('cart', cartString);
}

// Retrieving from local cart 
function retrieveFromLocalStorage() {
  const cartArrayString = localStorage.getItem('cart');
  cart = JSON.parse(cartArrayString);
}

// Adding item to cart when button is clicked

function onCartClick() {
  let newCinnamonRoll = new Roll(rollType, glaze.options[glaze.selectedIndex].text, donutSize.options[donutSize.selectedIndex].text, rolls[rollType].basePrice);
  cart.push(newCinnamonRoll);
  saveToLocalStorage();
  console.log(cart); 
}

if (localStorage.getItem('cart') != null) {
  retrieveFromLocalStorage();
}




