let counterValue = 0;

    const decrementBtn = document.querySelector('button[data-action="increment"]');
    const incrementBtn = document.querySelector('button[data-action="decrement"]');
    let valueBtn = document.getElementById('value');

decrementBtn.addEventListener('click', adNumber);
function adNumber () {
    counterValue += 1;
    valueBtn.textContent = counterValue;
}

incrementBtn.addEventListener('click', minusNumber);
function minusNumber () {
    counterValue -= 1;
    valueBtn.textContent = counterValue;
}






