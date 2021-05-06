const btn = document.querySelector(".press");
console.log(btn);
btn.addEventListener("click", colorChanger);
console.log(btn);

const colorDiv = document.querySelector(".fun");

function colorChanger() {
  colorDiv.style.backgroundColor = "blue";
}

/*async function doggo() {
  const response = await fetch("https://api.thedogapi.com/v1/images/search");
  console.log(response.json());
  console.log(response.value);
}
doggo();
*/

class Person {
  constructor(name, age, occupation) {
    (this.name = name)((this.age = age))((this.occupation = occupation));
  }
  say() {
    console.log(
      `Hello my name is ${name},I'm ${age} years old and I work in ${occupation}`
    );
  }
}

let far = new Person("Antonella", 25, "unicorn");
console.log(far.say());
