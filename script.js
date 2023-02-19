const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirm_password");
const passwordError = document.querySelector(".error.repeat");

passwordConfirm.addEventListener("input", function(){ 
    if(password.value !== passwordConfirm.value){
        // console.log(password.value, passwordConfirm.value);
        passwordError.textContent = "passwords do not match";
        passwordError.style.color = "red";
        passwordError.style.backgroundColor = "black";
    }
    else{
        passwordError.textContent = "";
        }
});
const btn = document.querySelector("#btn");
const notSumbmitted = document.querySelector(".notSubmitted")
btn.addEventListener("click", function(e){
    if(password.value !== passwordConfirm.value){
        e.preventDefault();
        notSumbmitted.textContent = "form has not been submitted because passwords do not match!"
    }
})