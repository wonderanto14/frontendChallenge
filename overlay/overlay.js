const lo = document.getElementById("chan");
console.log(lo);

lo.addEventListener("click", rin);

function rin() {
  console.log("pressed");
  lo.style.backgroundColor = "purple";
}
