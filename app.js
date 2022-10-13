const form = document.querySelector('#create-account-form');
const fnameInput = document.querySelector('#fname');
const lnameInput = document.querySelector('#lname');
const fullnameInput = document.querySelector('#fullname');
const emailInput = document.querySelector('#email');
const phoneInput = document.querySelector('#phone');
const birthdayInput = document.querySelector('#birthday');
const passwordInput = document.querySelector('#password');
const confirmPasswordInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (event)=>{
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

function validateForm() {
    //first name validation.....
    if(fnameInput.value.trim()==''){
        setError(fnameInput, 'First Name can not be empty');
    }else if(fnameInput.value === fnameInput.value.toLowerCase()){
        setError(fnameInput, 'Must start with capital letter Your First Name')
    }
    else if(fnameInput.value.trim().length < 4 || fnameInput.value.trim().length > 10){
        setError(fnameInput, 'First Name must be min 4 and max 10 charecters');
    }else {
        setSuccess(fnameInput);
    }

     //last name validation......
     if(lnameInput.value.trim()==''){
        setError(lnameInput, 'Last Name can not be empty');
    }else if(lnameInput.value === lnameInput.value.toLowerCase()){
        setError(lnameInput, 'Must start with capital letter Your Last Name')
    }
    else if(lnameInput.value.trim().length < 4 || lnameInput.value.trim().length > 10){
        setError(lnameInput, 'Last Name must be min 4 and max 10 charecters');
    }else {
        setSuccess(lnameInput);
    }


    //fullname validation......
    if(fullnameInput.value.trim()==''){
        setError(fullnameInput, 'Name can not be empty');
    }else if(fullnameInput.value === fullnameInput.value.toLowerCase()){
        setError(lnameInput, 'Must start with capital letter Your Full Name')
    }
    else if(fullnameInput.value.trim().length < 8 || fullnameInput.value.trim().length > 20){
        setError(fullnameInput, 'Full Name must be min 8 and max 20 charecters');
    }else {
        setSuccess(fullnameInput);
    }


    //email validation.....
    if(emailInput.value.trim()==''){
        setError(emailInput, 'Provide email address');
    }else if(isEmailValid(emailInput.value)){
        setSuccess(emailInput);
    }else{
        setError(emailInput, 'Provide valid email address');
    }

     //phone number validation.......
     if(phoneInput.value.trim()==''){
        setError(phoneInput, 'Provide phone number');
    }else if(isPhoneValid(phoneInput.value)){
        setSuccess(phoneInput);
    }else{
        setError(phoneInput, 'Provide valid phone number');
    }

    //birthday validation......
    const n = birthdayInput.value.split('-');
    let element;
    for (let i = 0; i < n.length; i++) {
        element = n[0];
    }
    const d = new Date();
    let currentYear = d.getFullYear();
    const current = (currentYear - element);
    console.log(current)

    if(birthdayInput.value.trim()==''){
        setError(birthdayInput, 'Birthday Name can not be empty');
    }else if(current <= 18 && current <= 90){
        setError(birthdayInput, 'Must be start minimum 18 and max 90')
    }else {
        setSuccess(birthdayInput);
    }

    //password validation....
    if(passwordInput.value.trim()==''){
        setError(passwordInput, 'Password can not be empty');
    }else if(passwordInput.value.trim().length <6 || passwordInput.value.trim().length >20){
        setError(passwordInput, 'Password min 6 max 20 charecters');
    }else {
        setSuccess(passwordInput);
    }

    //confirm validation.....
    if(confirmPasswordInput.value.trim()==''){
        setError(confirmPasswordInput, 'Password can not be empty');
    }else if(confirmPasswordInput.value !== passwordInput.value){
        setError(confirmPasswordInput, 'Password does not match');
    }else {
        setSuccess(confirmPasswordInput);
    }
}

//error message funtinalities....
function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}

//email validate use regex
function isEmailValid(email){
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}

//phone number validate use regex
function isPhoneValid(phone){
    const reg =/(^(\+88|0088)?(01){1}[3456789]{1}(\d){8})$/;
    return reg.test(phone);
}