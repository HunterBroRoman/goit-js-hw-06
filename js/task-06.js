let input = document.querySelector("#validation-input");
input.addEventListener("blur", lossFocuc);


 function lossFocuc() {
    if (input.getAttribute('data-length') > input.value.length) { 
      input.classList.remove('valid');
      input.classList.add('invalid');
    } else {
      input.classList.remove('invalid');
      input.classList.add('valid');
    }
  }

  