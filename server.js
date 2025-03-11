const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Servir archivos estáticos desde "public"
app.use(express.static(path.join(__dirname, "public")));

// Servir perfil.html en la ruta raíz "/"
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "perfil.html"));
});

// Ruta para procesar el formulario
app.post("/contacto", (req, res) => {
    const { nombre, email, mensaje } = req.body;

    if (!nombre || !email || !mensaje) {
        return res.status(400).json({ message: "Todos los campos son obligatorios." });
    }

    console.log("📩 Nuevo mensaje recibido:");
    console.log("Nombre:", nombre);
    console.log("Correo:", email);
    console.log("Mensaje:", mensaje);

    res.json({ message: "¡Mensaje enviado con éxito!" });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
});
