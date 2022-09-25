
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
let size = document.querySelector("#sizedropdown");


// // Creating option1 within Glaze (for future reference) 
// let option = document.createElement('option');
// option.text = keepOriginal.itemGlaze
// option.value = keepOriginal.price
// glaze.add(option);

// Array of all the glaze options
let glazeArray = [keepOriginal, sugarMilk, vanillaMilk, doubleChocolate];

//Loop for creating glaze options in the dropdown
for(let i=0; i<glazeArray.length; i++) {
    let optionGlaze = document.createElement('option');
    optionGlaze.text = glazeArray[i].itemGlaze;
    optionGlaze.value = glazeArray[i].price;
    glaze.add(optionGlaze);
}


// Array of all the size options
let glazeSize = [one, three, six, twelve]

// Loop for creating size option in the dropdown
for(let i=0; i<glazeSize.length; i++){
    let sizeChoice = glazeSize[i]
    console.log(sizeChoice)
    let optionSize = document.createElement('option');
    optionSize.text = sizeChoice.itemSize
    optionSize.value = sizeChoice.price
    size.add(optionSize);
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
function onSizeChange(size) {
    selectedSize = size.value;
    computeFinalAmount();
}

// Computing final amount and displaying it in the amount container 
function computeFinalAmount() {
    let amountContainer = document.querySelector('#totalamount');

    // De-bugging code by adding Number(option) to ensure program takes in value as a number and not a string
    const finalamount = (2.49 + Number(selectedGlaze)) * Number(selectedSize);
    amountContainer.textContent = finalamount.toFixed(2);
}
