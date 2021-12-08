// Get the input fields
var password = document.querySelector(".password");
var phone = document.querySelector('.phone');
var name2 = document.querySelector('.name')
var lastName = document.querySelector('.lastname')
var email = document.querySelector('.email');
var address = document.querySelector('.address');

var form = document.querySelector('form')

// Get the error elements
var errorPassword = document.getElementById("errorPassword");
errorPassword.style.color = 'red'; 

var errorName = document.getElementById('errorName');
errorName.style.color = 'red'; 

var errorPhone = document.getElementById('errorPhone');  
errorPhone.style.color = 'red';  

var errorLastName = document.getElementById('errorLastName');
var errorEmail = document.getElementById('errorEmail');
var errorAddress = document.getElementById('errorAddress')

// Regular Expresions
const chars = {
    nums: /[0-9]/,
    noNums: /\D/,
    letters: /[a-z]/i,
    numsAndLetters: /[a-zA-Z0-9]/,
    email: /^.+@.+\.[a-zA-z]+$/
}

// Exercise 8
function validate() {
    // Validate fields entered by the user: name, phone, password, and email

    // NAME VALIDATION
    name2.addEventListener('keyup', () =>{
        if(name2.value.length < 3){
            errorName.innerHTML = 'Minimum 3 characters'
            errorName.style.display = 'block';
        } else if (chars.nums.test(name2.value)){
            errorName.innerHTML = 'Numbers in the name are not valid'
            errorName.style.display = 'block';
        } else {
            errorName.style.display = 'none';
        }
    })

    //LASTNAME VALIDATION
    lastName.addEventListener('keyup', () =>{
        if(lastName.value.length < 3){
            errorLastName.style.display = 'block'
        } else if (chars.nums.test(lastName.value)){
            errorLastName.innerHTML = 'Numbers in the name are not valid';
            errorLastName.style.display = 'block'
        } else {
            errorLastName.style.display = 'none'
        }
    })

    // EMAIL VALIDATION
    email.addEventListener('keyup', () => {
        if(chars.email.test(email.value) === false){
            errorEmail.innerHTML = 'Invalid e-mail format'
            errorEmail.style.display = 'block'
        } else {
            errorEmail.style.display = 'none';
        }
    })

    //PASSWORD VALIDATION
    password.addEventListener('keyup', () => {
        if (password.value.length < 3){
            errorPassword.innerHTML = 'Minimum 3 characters'
            errorPassword.style.display = 'block';
        } else if (chars.nums.test(password.value) && chars.letters.test(password.value)){
            errorPassword.style.display = 'none';
        } else {
            errorPassword.innerHTML = 'Must contain letters and numbers'
            errorPassword.style.display = 'block';
        }       
    })

    //ADDRESS VALIDATION
    address.addEventListener('keyup', () => {
        if(address.value.length < 3){
            errorAddress.innerHTML = 'Minimum 3 characters'
            errorAddress.style.display = 'block';
        } else {
            errorAddress.style.display = 'none';
        }
    })

    //PHONE VALIDATION
    phone.addEventListener('keyup', () =>{
        if (phone.value.length < 3){
            errorPhone.innerHTML = 'Minimum 3 characters';
            errorPhone.style.display = 'block'
        } else if(chars.noNums.test(phone.value)){
            errorPhone.innerHTML = 'Invalid phone number!!';
            errorPhone.style.display = 'block'
        } else {
            errorPhone.style.display = 'none'
        }
    })
}

validate()

errorEmptyFields = () => {
    
}

form.addEventListener('submit', e => {
    e.preventDefault();
    
    if(name2.value == ''){
        errorName.innerHTML = 'Empty field, must be filled to continue';
        errorName.style.display = 'block';
    }
    if(lastName.value == ''){
        errorLastName.innerHTML = 'Empty field, must be filled to continue';
        errorLastName.style.display = 'block';
    }
    if(email.value == ''){
        errorEmail.innerHTML = 'Empty field, must be filled to continue';
        errorEmail.style.display = 'block';
    }
    if(password.value == ''){
        errorPassword.innerHTML = 'Empty field, must be filled to continue';
        errorPassword.style.display = 'block';
    }
    if(address.value == ''){
        errorAddress.innerHTML = 'Empty field, must be filled to continue';
        errorAddress.style.display = 'block';
    }
    if(phone.value == ''){
        errorPhone.innerHTML = 'Empty field, must be filled to continue';
        errorPhone.style.display = 'block';
    }
    
})
