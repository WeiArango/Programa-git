//Función para mostrar alerta de llenado de los campos 
function guardar() {
    let nombre = document.getElementById("nombre").value;
    let username = document.getElementById("username").value;
    let cedula = document.getElementById("cedula").value;
    let direccion = document.getElementById("direccion").value;
    let celular = document.getElementById("celular").value;
    let tipoUsuario = document.getElementById("tipoUsuario").value;
    let tp = document.getElementById("tp").value;

    if(nombre !== "" && username !== "" && cedula !== "" && direccion !== "" && celular !== "" && tipoUsuario !== "") {
        //Verificar si el tipo de usuario es "cliente" o "paseador de mascotas" y el campo tp no es obligatorio
        if(tipoUsuario === "1" || tipoUsuario === "5" || tipoUsuario.toLowerCase() === "cliente" || tipoUsuario.toLowerCase() === "paseador de mascotas"){
            window.location.href = "/cliente/index.html";
        } else {
            //Si no es cliente ni paseador de mascotas, entonces el campo tp es obligatorio
            if(tp !== ""){
                window.location.href = "/cliente/index.html";
            } else {
                alert("Por favor adjunta tu diploma o tarjeta profesional")
            }
        }        
    }else{
        alert("Por favor digita todos los campos");
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








