// Pop up on confirmation bias card click
function onConfirmationCardClick(){
    var x = document.getElementById("confirmationbiasdetails");
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
    var x = document.getElementById("confirmationbiasdetails");
    x.style.display = "none";
}



// Pop up on decoy effect card click
function onDecoyCardClick(){
    var x = document.getElementById("decoyeffectdetails");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

// Closing pop up with decoy effect details
function onExitTwoClick(){
    var x = document.getElementById("decoyeffectdetails");
    x.style.display = "none";
}



// Pop up on anchoring effect card click
function onAnchorCardClick(){
    var x = document.getElementById("anchoringbiasdetails");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
}

// Closing pop up with confirmation bias details
function onExitThreeClick(){
    var x = document.getElementById("anchoringbiasdetails");
    x.style.display = "none";
}
