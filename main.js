const pwd = document.getElementById("pwd");
const subBtn = document.getElementsByClassName("submit-btn")[0];

subBtn.addEventListener("click", function(event){
    event.preventDefault();
    validatePassword();
    validation();
})

function validation(){
    if(validatePassword(true)){
        console.log("hello");
        
        alert("successful");
    }
}

function validatePassword(){
    let pwdValue = pwd.value.trim();
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,12}$/;
    // Minimum eight-tweleve characters, at least one letter, one number and one special character
    if(regexPassword.test(pwdValue)){        
        pwd.nextElementSibling.style.display = "none";
        return true;
    }
    else{
        pwd.nextElementSibling.style.display = "block";
        return false;
    }
}