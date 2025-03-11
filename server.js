const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Ruta principal que sirve `perfil.html`
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "perfil.html"));
});

// Ruta para mostrar los datos recibidos
app.get("/resultado", (req, res) => {
    const { nombre, email, mensaje } = req.query;

    res.send(`
        <html>
        <head>
            <title>Datos Enviados</title>
            <link rel="stylesheet" href="/css/estilos.css">
        </head>
        <body>
            
            <!-- Estructura de la tarjeta -->
            <div class="card">
                <h2>Datos Recibidos</h2>
                <div class="container">
                    <h4><b>Nombre:</b> ${nombre}</h4>
                    <p><b>Email:</b> ${email}</p>
                    <p><b>Mensaje:</b> ${mensaje}</p>
                </div>
            </div>
            <a href="/">Volver a Mi Perfil</a>
        </body>
        </html>
    `);
});

// Ruta para procesar el formulario y redirigir a /resultado
app.post("/api/contacto", (req, res) => {
    const { nombre, email, mensaje } = req.body;

    // Redirigir a /resultado con los datos como parámetros en la URL
    res.redirect(`/resultado?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&mensaje=${encodeURIComponent(mensaje)}`);
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
