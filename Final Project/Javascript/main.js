// Pop up on confirmation bias card click
function onConfirmationCardClick(){
    let x = document.getElementById("confirmationbiasdetails");
    console.log(x.style.display);
    if (x.style.display == "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
    console.log("cardClick")
}


// Closing pop up with confirmation bias details
function onExitOneClick(){
    let x = document.getElementById("confirmationbiasdetails");
    x.style.display = "none";
}



// Pop up on decoy effect card click
function onDecoyCardClick(){
    let x = document.getElementById("decoyeffectdetails");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

// Closing pop up with decoy effect details
function onExitTwoClick(){
    let x = document.getElementById("decoyeffectdetails");
    x.style.display = "none";
}



// Pop up on anchoring effect card click
function onAnchorCardClick(){
    let x = document.getElementById("anchoringbiasdetails");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

// Closing pop up with confirmation bias details
function onExitThreeClick(){
    let x = document.getElementById("anchoringbiasdetails");
    x.style.display = "none";
}

// To open decoy effect pop up when learn more is clicked on the quiz page
const urlSearchParams = new URLSearchParams(window.location.search);
const effect = urlSearchParams.get("effect")
console.log(effect)
if (effect ==="confirm"){
  onDecoyCardClick()
}

