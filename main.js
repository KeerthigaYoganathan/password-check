const pwd = document.getElementById("pwd");
const confPwd = document.getElementById("conf-pwd")
const subBtn = document.getElementsByClassName("submit-btn")[0];
const pwdInpBox = document.getElementsByClassName("password-input-box")[0];
const confPwdInpBox = document.getElementsByClassName("confirm-password-input-box")[0];

const strengthIndicator = document.getElementById("strength-indicator");

subBtn.addEventListener("click", function(event){
    event.preventDefault();
    validatePassword();
    // validateConfirmPassword();
    // alert("successful"); 
    
})



function validatePassword(){
    let pwdValue = pwd.value;
    // console.log(pwdValue, "password");
    
    let regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    // Minimum eight characters, at least one letter, one number and one special character
    if(regexPassword.test(pwdValue)){    
           
        // pwd.nextElementSibling.style.display = "none";
        pwdInpBox.classList.remove("pwd-cndtn-active");
        validateConfirmPassword();
        
        
    }
    else{
        // pwd.nextElementSibling.style.display = "block";
        pwdInpBox.classList.add("pwd-cndtn-active");
        
    }
}

function validateConfirmPassword(){
    let confPwdValue = confPwd.value;
    // console.log(confPwdValue, "confirm password"); 

    pwdValue = pwd.value;   

    if(confPwdValue == pwdValue){      
        
        confPwdInpBox.classList.remove("pwd-alt-active");
        strengthIndicatorFunc();
        
    }
    else{
        confPwdInpBox.classList.add("pwd-alt-active");
        
    }
}

function strengthIndicatorFunc(){
    pwdValue = pwd.value;
    let regexPasswordMedium = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    let regexPasswordStrong = /^(?=(.*[A-Za-z]){2,})(?=(.*\d){2,})(?=(.*[@$!%*#?&]))[A-Za-z\d@$!%*#?&]{8,}$/;
    pwdInpBox.classList.add("pwd-cndtn-active");

    if(regexPasswordStrong.test(pwdValue)){
        
        strengthIndicator.innerText = "Password strength is strong.";
        strengthIndicator.style.color = "green";
    }
   else if(regexPasswordMedium.test(pwdValue)){
        strengthIndicator.innerText = "Password strength is Medium.";
        strengthIndicator.style.color = "yellow";
   }
   else{
        strengthIndicator.innerText = "Password strength is low.";
        strengthIndicator.style.color = "red";
   }
}