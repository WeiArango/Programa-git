function signUp() {
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    let confirmPass = document.getElementById("confirmPass").value;

    if(email !== "" && pass !== "" && confirmPass !== "") {
        window.location.href = "/Login/Datos básicos/index.html"
    }else{
        alert("Por favor digita todos los campos")
    }
};

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


//Configuración para enviar el formulario a la base de datos
const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();

// Configuración de MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'jdbc:mysql://localhost/db_virtualvet'
});

db.connect((err) => {
    if (err) {
        console.error('Error de conexión a MySQL:', err);
    } else {
        console.log('Conectado a MySQL');
    }
});

// Middleware para analizar datos del formulario
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Ruta para manejar la solicitud del formulario
app.post('/btnSignUp', (req, res) => {
    const { email, pass } = req.body;

    // Insertar el usuario en la base de datos
    const sql = 'INSERT INTO usuario (email, password) VALUES (?, ?)';
    db.query(sql, [email, pass], (err, result) => {
        if (err) {
            console.error(err);
            res.status(500).send('Error interno del servidor');
        } else {
            res.status(200).send('Registro exitoso');
        }
    });
});

// Iniciar el servidor
const PORT = 3306;
app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});











