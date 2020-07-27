const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show error Message
function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// Email Validation
function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
// Check required
    function checkRequired(inputArr){
        inputArr.ForEach(function(input){
            if(input.value.trim() === ''){
                showError(input, `${input.id} is required`);
            }  
            else{
                showSuccess(input);
            }
        })
    }

// Event Listeners

form.addEventListener('submit', function name(e) {
    e.preventDefault();
    
    // checkRequired(username);
    // checkRequired(email);
    // checkRequired(password);
    // checkRequired(password2);

    checkRequired([username,email,password,password2]);
    
})