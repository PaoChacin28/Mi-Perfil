document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita recargar la página

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;
    const mensaje = document.getElementById("mensaje").value;

    // Validación de campos vacíos
    if (!nombre || !email || !mensaje) {
        alert("Todos los campos son obligatorios.");
        return; // Detiene el proceso si falta algún campo
    }

    // Validación de nombre (solo letras y espacios)
    const nombreRegex = /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/;
    if (!nombreRegex.test(nombre)) {
        alert("El nombre no debe contener números ni caracteres especiales.");
        return;
    }

    // Validación de email con regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert("El email no es válido.");
        return;
    }

    // Si todo es válido, redirige con los datos del formulario
    window.location.href = `/resultado?nombre=${encodeURIComponent(nombre)}&email=${encodeURIComponent(email)}&mensaje=${encodeURIComponent(mensaje)}`;
});
