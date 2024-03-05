/*SECCIÓN DATOS PERSONALES */
/* Actualizar datos personales */
function actualizar_usuario() {
    let nombre = document.getElementById("nombre").value;
    let username = document.getElementById("username").value;
    let email = document.getElementById("email").value;
    let telefono = document.getElementById("telefono").value;
    let ubicacion = document.getElementById("ubicacion").value;
    let identificacion = document.getElementById("identificacion").value;
    let tipo_usuario = document.getElementById("tipo_usuario").value;

    if(nombre !== "" && username !== "" && email !== "" && telefono !== "" && ubicacion !== "" && identificacion !== "" && tipo_usuario !== "") {
        alert("Sus datos fueron actualizados correctamente")
        window.location.href = `/cliente/index.html`
    }else{
        alert("Por favor digita todos los campos")
    }
}

/* Modificar contraseña */
function modificar_contraseña() {
    window.location.href = "/login/recover password/index.html"
}

