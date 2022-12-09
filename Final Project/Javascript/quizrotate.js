
// On click the first quiz option
function onAnswer1Click() {

    console.log("clicked answer 1");

    let x = document.getElementById("answer2");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    let questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');
    setTimeout(function(){
      let x = document.getElementById("flipfront");
      x.remove()
    },1000)

}

// On click the second quiz option
function onAnswer2Click(){

    let x = document.getElementById("answer2");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    let questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');

    questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');
    setTimeout(function(){
      let x = document.getElementById("flipfront");
      x.remove()
    },1000)
}

// On click the third quiz option
function onAnswer3Click(){

    let x = document.getElementById("answer1");
    if (x.style.display === "flex") {
      x.style.display = "none";
    } else {
      x.style.display = "flex";
    }

    let questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');

    questionCard = document.getElementById("questionone");
    questionCard.classList.add('rotated-card');
    setTimeout(function(){
      let x = document.getElementById("flipfront");
      x.remove()
    },1000)
}

// On learn more click 
function onLearnMoreClick(){
  console.log('foo')
  window.location.replace("cheatsheet.html?effect=confirm")
  let x = document.getElementById("learnmore");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
