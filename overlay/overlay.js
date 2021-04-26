const lo = document.getElementById("chan");
console.log(lo);

lo.addEventListener("click", rin);

function rin() {
  console.log("pressed");
  lo.style.backgroundColor = "purple";
}

const col = document
  .getElementById("btn")
  .addEventListener("click", changeColor);
const change = document.getElementById("random");

function changeColor() {
  change.classList.toggle("change");
}
console.log("hello");
async function getData() {
  let response = await fetch("https://anapioficeandfire.com/api/houses/1");
  let data = response.json();
  console.log(data);
}
getData();
