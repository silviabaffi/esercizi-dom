// Recuperare il valore di ciascun campo di input e creare un oggetto person
// contenente le proprietà: firstName, lastName e age.
// Infine recuperare l'elemento form e aggiungere l'attributo data-person
// contenente l'oggetto person in formato json.

let person = { firstName: "", lastName: "", age: "" };

const input = document.querySelectorAll("input");

person.firstName = input[0].getAttribute("value")
person.lastName = input[1].getAttribute("value")
person.age = input[2].getAttribute("value")

const form = document.querySelector("form")
const personJSON = JSON.stringify(person);
form.setAttribute("data-person", personJSON)
