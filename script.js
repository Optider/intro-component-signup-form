let firstName = document.getElementById("first_name");
let lastName = document.getElementById("last_name");
let email = document.getElementById("email");
let password = document.getElementById("password");

let elArr = [firstName, lastName, email, password];

document.querySelector(".form").addEventListener("submit", (e) => {
  e.preventDefault();
  validateFields();
});

function validateFields() {
  for (el of elArr) {
    if (!el.value) {
      displayError(el);
    } else {
      unsetError(el);
    }
  }

  
  let isValidEmail = validateEmail(email.value);
  if (!isValidEmail) {
    email.parentElement.children[2].textContent = `Please enter a valid Email Address.`;
    email.parentElement.classList.add("error");
  }
}

function displayError(element) {
  el.parentElement.classList.add("error");
  let inputName = el.getAttribute("placeholder");
  el.parentElement.children[2].textContent = `${inputName} is required.`;
}

function unsetError(el){
  el.parentElement.classList.remove('error');
  el.parentElement.children[2].textContent = "";
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}
