let lol = document.querySelector("div");
lol.addEventListener("click", chan);

let playerOneScore;

let btnn = document.getElementById("btn");
btnn.addEventListener("click", addOne);

//.addEventListener("click", addOne);
console.log(typeof playerOneScore);
function addOne() {
  playerOneScore.innerText = Number(playerOneScore++);
}

function chan() {
  lol.classList.toggle("cha");
}
