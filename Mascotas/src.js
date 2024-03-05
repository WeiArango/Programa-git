function registro_mascotas () {
    let nombreMascota = document.getElementById("nombreMascota").value;
    let usernameMascota = document.getElementById("usernameMascota").value;
    let especieMascota = document.getElementById("especieMascota").value;
    let sexoMascota = document.getElementById("sexoMascota").value;

    console.log("Nombre de la mascota:", nombreMascota);
    console.log("Username:", usernameMascota);
    console.log("Especie:", especieMascota);
    console.log("Sexo:", sexoMascota);

    if(nombreMascota !== "" && usernameMascota !== "" && especieMascota !== "" && sexoMascota !== ""){
        alert("Su mascota fué registrada correctamente")
        window.location.href = "/cliente/index.html"
    }else{
        alert("Por favor digita el campo Nombre mascota")
    }
}