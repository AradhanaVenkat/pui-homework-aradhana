
// On click the first quiz option
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

// On click the second quiz option
function onAnswer2Click(){

    var x = document.getElementById("answer2");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    var questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');
}

// On click the third quiz option
function onAnswer3Click(){

    var x = document.getElementById("answer2");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    var questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');
}


// function onLearnMoreClick(){
//     window.location.href='cheatsheet.html'
//     var x = document.getElementById("decoyeffectdetails");
//     if (x.style.display === "block") {
//         x.style.display = "none";
//       } else {
//         x.style.display = "block";
//       }
// }