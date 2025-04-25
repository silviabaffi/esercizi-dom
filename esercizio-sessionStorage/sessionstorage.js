const button = document.querySelector(".btn");

const savedFormData = JSON.parse(sessionStorage.getItem("formData"));

if (savedFormData) {
  document.querySelector(".email").value = savedFormData.email;
  document.querySelector(".firstname").value = savedFormData.firstname;
  document.querySelector(".lastname").value = savedFormData.lastname;
  document.querySelector(".title-name").innerText = savedFormData.firstname;
}

button.addEventListener("click", () => {
  const email = document.querySelector(".email").value;
  const firstname = document.querySelector(".firstname").value;
  const lastname = document.querySelector(".lastname").value;

  const formData = { email, firstname, lastname };

  sessionStorage.setItem("email", email);
  sessionStorage.setItem("firstname", firstname);
  sessionStorage.setItem("lastname", lastname);

  sessionStorage.setItem("formData", JSON.stringify(formData));
  document.querySelector(".title-name").innerText = firstname;
});
