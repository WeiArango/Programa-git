function recoverPassword() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var securityQuestion = document.getElementById("securityQuestion").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;

    if(username !== "" && email !== "" && securityQuestion !== "" && password !== "" && confirmPassword !== "") {
        /*Función lógica va aca*/
    }else{
        alert("Por favor digita todos los campos")
    }
}