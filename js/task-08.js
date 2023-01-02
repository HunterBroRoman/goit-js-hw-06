const form = document.querySelector(".login-form"),
  formEmail = document.querySelector('[type="email"]'),
  formPassword = document.querySelector('[type="password"]');

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault(); //запрет на перегрузку страницы

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Любий друже, заповни всі поля!");
  } //проверка на пустое поле

  const formData = new FormData(event.currentTarget);
  //сбор данных форм и их отправка

  // formData.forEach((value, name) => {
  //   console.log("name", name);
  //   console.log("value", value);
  // }); //проверка правильности

  console.log({[email.name]: email.value,
               [password.name]: password.value,});
               
  event.currentTarget.reset(); //вывод в консоль и очистка полей формы
}


//----------------------second variant----------------------------
// const form = document.querySelector('.login-form');

// form.addEventListener('submit', onFormSubmit);

// function onFormSubmit(e) {
// e.preventDefault();

// const formElements = e.currentTarget.elements;
// const mail = formElements.email.value;
// const password = formElements.password.value;

// if(mail == "" || password == "") {
//     alert('ALARM!!!');
// } else {
//     const formData = {
//         mail,
//         password,
//         };
//         console.log(formData);
// } 
// form.reset();
// }

