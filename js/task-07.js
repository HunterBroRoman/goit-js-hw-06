// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const input = document.querySelector("#font-size-control");
const textId = document.querySelector("#text");

input.addEventListener('input', scrollChek);

function scrollChek(event) {
    textId.style.fontSize = event.currentTarget.value + "px";
}

//------------------second variant ------------------------------

// const inputRangeRef = document.querySelector("#font-size-control");
// const inputTextRef = document.querySelector("#text");

// const handleInput = () => {
//   inputTextRef.style.fontSize = `${inputRangeRef.value}px`;
// };

// inputRangeRef.addEventListener("input", handleInput);

