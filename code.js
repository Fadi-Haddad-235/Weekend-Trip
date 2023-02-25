window.onload=function(){
const form = document.getElementById("form");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const number = document.getElementById("number");
const password_icon =document.getElementById("password-status");
const email_icon =document.getElementById("email-status");

signup_button=document.getElementById("signup-button");
signup_button.addEventListener("click",validate);

// i.classList.add("fa-check");
// i.classList.add("fa-xmark");

}