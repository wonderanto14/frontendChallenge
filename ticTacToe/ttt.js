const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");
const div5 = document.getElementById("div5");
const div6 = document.getElementById("div6");
const div7 = document.getElementById("div7");
const div8 = document.getElementById("div8");
const div9 = document.getElementById("div9");
const playerOneScore = document.getElementById("playerOneScore");
const playerTwoScore = document.getElementById("playerTwoScore");
div1.addEventListener("click", makeX);
div2.addEventListener("click", makeOX);

function makeX() {
  div1.classList.toggle("text");

  Number(playerOneScore);
  playerOneScore.innerHTML = 1;
}

function makeOX() {
  div2.innerText = "Y";
  Number(playerTwoScore);
  playerTwoScore.innerHTML = 2;
}

function makeOX() {
  div3.innerText = "X";
  Number(playerTwoScore).innerHTML++;
  // playerTwoScore.innerHTML = 2;
}
