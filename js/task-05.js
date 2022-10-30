// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const input = document.querySelector("#name-input");
const nameUser = document.querySelector("#name-output");

input.addEventListener('input', inputName);

function inputName (event) {
    if (event.currentTarget.value) {
        nameUser.textContent = event.currentTarget.value;
          } else {
            nameUser.textContent = 'Anonymous';
          }
}




