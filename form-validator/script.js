const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phoneNumber = document.getElementById('phone');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('password2'); 

form.addEventListener('submit', event => {
    event.preventDefault();

    checkRequiredness([username, email, phoneNumber, password, confirmPassword]);
    checkLength(username, 4, 8);
    checkLength(password, 6);
    checkEmail(email);
    checkPhoneNumber(phoneNumber);
    checkPassword(password);
    checkConfirmPassword(password, confirmPassword);

    const userData = {
        username: username.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
        password: password.value,
        confirmPassword: confirmPassword.value
    }
    console.log(userData);
})

function checkRequiredness(inputs) {
    inputs.forEach(input => {
        if (input.value.trim() === '') {
            showError(input, `${getFieldName(input)} is required`);
        } else {
            showSuccess(input);
        }
    });
}

function getFieldName(input) {
    return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

function showError(input, errorMessage) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = errorMessage;
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function checkLength(input, minLength, maxLength=null) {
    if (input.value.trim().length < minLength) {
        showError(input, `${getFieldName(input)} must be at least ${minLength} characters long`);
    } else if (maxLength && input.value.trim().length > maxLength) {
        showError(input, `${getFieldName(input)} can't be more than ${maxLength} characters`);
    } else {
        showSuccess(input);
    }
}

function checkEmail(input) {
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    let email = String(input.value.trim()).toLowerCase();
    if (regex.test(email)) {
        showSuccess(input);
    } else {
        showError(input, `Invalid email`);
    }
}

function checkPhoneNumber(input) {
    const regex = /^(\+88)?01(\d){9}$/
    let phoneNumber = String(input.value);
    if (regex.test(phoneNumber)) {
        showSuccess(input)
    } else {
        showError(input, 'Invalid Phone number')
    }
}

function checkPassword(input) {
    const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
    let password = String(input.value)
    if (regex.test(password)) {
        showSuccess(input)
    } else {
        showError(input, `Combination of numbers, lowercase and uppercase characters`);
    }
}

function checkConfirmPassword(input1, input2) {
    if (input1.value === input2.value) {
        showSuccess(input2);
    } else {
        showError(input2, "Passwords do not match");
    }
}