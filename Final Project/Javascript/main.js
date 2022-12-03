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


// Animate.style - All animations will take half the time to accomplish
// document.documentElement.style.setProperty('--animate-duration', '.8s');





function onAnswer1Click() {

    console.log("clicked answer 1");

    var x = document.getElementById("answer1");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    var questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');

}

function onAnswer2Click(){
    var x = document.getElementById("answer2");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function onAnswer3Click(){
    var x = document.getElementById("answer3");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}
