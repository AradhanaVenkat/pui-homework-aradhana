// Pop up on card click
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

function onDecoyCardClick(){
    var x = document.getElementById("decoyeffectdetails");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

function onAnchorCardClick(){
    var x = document.getElementById("anchoringbiasdetails");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}


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
