let passwordInput = document.getElementById("password");
let passwordButton = document.getElementById("visibility");
passwordButton.addEventListener('click', function(){
    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        let hiddenEye = document.querySelector('.visibility-off');
        hiddenEye.style.display = "block";
        let openEye = document.querySelector('.visibility-on');
        openEye.style.display = "none"
    }
    else if(passwordInput.type === "text"){
        passwordInput.type = "password";
        let openEye = document.querySelector('.visibility-on');
        openEye.style.display = "block";
        let hiddenEye = document.querySelector('.visibility-off');
        hiddenEye.style.display = "none";
    }
})