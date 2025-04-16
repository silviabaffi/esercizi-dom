// Crea la tua To-Do List mediante i metodi visti nel video.
// Crea una funzione che ti permetterà di:
// Creare una lista aggiungendo il task desiderato mediante il bottone Aggiungi.
// Creare un checkbox per ogni task aggiunto.

function addProduct() {
  const toDoList = document.createElement("li");
  const ul = document.querySelector("ul");
  ul.appendChild(toDoList);

  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");

  const barraBianca = document.querySelector("input");
  toDoList.innerText = barraBianca.value;

  toDoList.appendChild(checkbox);
}
