let email = document.getElementById("email");
let exclamationPoint = document.getElementById('exclamation-point');
let errorMessage = document.getElementById("error-message");
let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    if(email.validity.valueMissing){
        e.preventDefault();
        errorMessage.classList.remove('hidden');
        exclamationPoint.style.opacity = 1;
        errorMessage.classList.add('display-block');
    }else if (email.validity.typeMismatch) {
        e.preventDefault();
        errorMessage.classList.remove('hidden');
        exclamationPoint.style.opacity = 1;
        errorMessage.classList.add('display-block');
    } else {
        errorMessage.classList.remove('display-block');
        exclamationPoint.style.opacity = 0;
        errorMessage.classList.add('hidden');
    }
})
