//Función para mostrar alerta de llenado de los campos username y password
function login() {
    let username = document.getElementById("username").value;
    let passLogin = document.getElementById("passLogin").value;

    if(username !== "" && passLogin !== "") {
        window.location.href = "/cliente/index.html"
    }else{
        alert("Por favor digita todos los campos")
    }
}

/* Implementación de código para dar accesibilidad a la pantalla (cambio de color del container) */
document.getElementById("buttonContraste1").addEventListener("click", function() {
document.body.classList.toggle(`alto-contraste`, true);
document.querySelector(`.container`).style.backgroundColor = `purple`;   
});

document.getElementById("buttonContraste2").addEventListener("click", function() {
document.body.classList.toggle(`alto-contraste`, false);
document.querySelector(`.container`).style.backgroundColor = ``;    
});

/* Implementación de código para aumentar o reducir tamaño de la letra en pantalla */
document.getElementById('buttonAumentar').addEventListener('click', function() {
    aumentarTexto();
});

function aumentarTexto() {
    var elementosTexto = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, button, input, label');
    elementosTexto.forEach(function(elemento) {
        var estilo = window.getComputedStyle(elemento);
        var fontSize = parseFloat(estilo.fontSize); 
        elemento.style.fontSize = (fontSize * 1.1) + 'px'; 
    });
}

document.getElementById('buttonReducir').addEventListener('click', function() {
    reducirTexto();
});

function reducirTexto() {
    var elementosTexto = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6, span, a, li, button, input, label');
    elementosTexto.forEach(function(elemento) {
        var estilo = window.getComputedStyle(elemento);
        var fontSize = parseFloat(estilo.fontSize); 
        elemento.style.fontSize = (fontSize * 0.9) + 'px'; 
    });
}

//Función para mostrar la contraseña
check.onclick = togglePassword;
function togglePassword() {    
    if(check.checked) passLogin.type = "text";
    else passLogin.type = "password";
}







