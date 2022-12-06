
// On click the first quiz option
function onAnswer1Click() {

    console.log("clicked answer 1");

    var x = document.getElementById("answer2");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    var questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');
    setTimeout(function(){
      var x = document.getElementById("flipfront");
      x.remove()
    },1000)

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

    var questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');
    setTimeout(function(){
      var x = document.getElementById("flipfront");
      x.remove()
    },1000)
}

// On click the third quiz option
function onAnswer3Click(){

    var x = document.getElementById("answer1");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    var questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');

    var questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');
    setTimeout(function(){
      var x = document.getElementById("flipfront");
      x.remove()
    },1000)
}

// On learn more click 
function onLearnMoreClick(){
  console.log('foo')
  window.location.replace("cheatsheet.html?effect=confirm")
  var x = document.getElementById("learnmore");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}