let form = document.getElementById("form")
let user = document.getElementById("user").value
let email = document.getElementById("email").value
let pass = document.getElementById("pass").value
let passTwo = document.getElementById("pass2").value

console.log("sup")
form.addEventListener("submit",ran)

function ran(e){
   e.preventDefault();
    console.log(user);
}

if(user===""){
   console.log("usernames recquired bruh");
}