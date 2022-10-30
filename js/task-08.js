let form = document.querySelector(".login-form"),
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

  formData.forEach((value, name) => {
    console.log("name", name);
    console.log("value", value);
  }); //проверка правильности

  console.log(`Email: ${email.value}, Password: ${password.value}`);
  event.currentTarget.reset(); //вывод в консоль и очистка полей формы
}