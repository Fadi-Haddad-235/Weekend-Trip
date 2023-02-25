window.onload=function(){
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const password = document.getElementById("password");
const email = document.getElementById("email");
const number = document.getElementById("number");
const fname_icon =document.getElementById("fname-status");
const lname_icon =document.getElementById("lname-status");
const password_icon =document.getElementById("password-status");
const email_icon =document.getElementById("email-status");
const number_icon =document.getElementById("number-status");

signup_button=document.getElementById("signup-button");
signup_button.addEventListener("click",validate);

// i.classList.add("fa-check");
// i.classList.add("fa-xmark");
function validate (){
    validateFirstName();
    validateLastName();
    validatePassword();
    validateEmail();
    validateNumber();

}
function validateFirstName(){
    if (fname.value.trim() ===""){
        fname_icon.classList.add("fa-xmark");
        fname_icon.classList.remove("fa-check");

    }
    else{
        fname_icon.classList.remove("fa-xmark");
        fname_icon.classList.add("fa-check");
    }
}
function validateLastName(){
    if (lname.value.trim() ===""){
        lname_icon.classList.add("fa-xmark");
        lname_icon.classList.remove("fa-check");

    }
    else{
        lname_icon.classList.remove("fa-xmark");
        lname_icon.classList.add("fa-check");
    }
}




function validatePassword(){
    if (password.value.trim() ===""){
        password_icon.classList.add("fa-xmark");
        password_icon.classList.remove("fa-check");

    }
    else{
        password_icon.classList.remove("fa-xmark");
        password_icon.classList.add("fa-check");
    }
}




function validateEmail(){
    if (email.value.trim() ===""){
        email_icon.classList.add("fa-xmark");
        email_icon.classList.remove("fa-check");

    }
    else{
        email_icon.classList.remove("fa-xmark");
        email_icon.classList.add("fa-check");
    }
}
function validateNumber(){
    if (number.value.trim() ===""){
        number_icon.classList.add("fa-xmark");
        number_icon.classList.remove("fa-check");

    }
    else{
        number_icon.classList.remove("fa-xmark");
        number_icon.classList.add("fa-check");
    }
}
}