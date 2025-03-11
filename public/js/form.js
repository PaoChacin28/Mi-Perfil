document.addEventListener("DOMContentLoaded", function () {
    const modal = document.getElementById("modal");
    modal.style.display = "none"; // Asegurar que el modal esté oculto al cargar la página

    document.getElementById("contactForm").addEventListener("submit", async function (event) {
        event.preventDefault(); // Evita que la página se recargue

        const nombre = document.getElementById("nombre").value;
        const email = document.getElementById("email").value;
        const mensaje = document.getElementById("mensaje").value;
        const modalMensaje = document.getElementById("modal-mensaje");
        const cerrarModal = document.querySelector(".cerrar");

        try {
            const response = await fetch("/contacto", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ nombre, email, mensaje }),
            });

            const data = await response.json();

            // Mostrar mensaje en la ventana modal solo después de enviar el formulario
            if (response.ok) {
                modalMensaje.textContent = "✅ " + data.message;
                document.getElementById("contactForm").reset();
            } else {
                modalMensaje.textContent = "⚠️ " + data.message;
            }

            modal.style.display = "flex"; // Mostrar modal

        } catch (error) {
            modalMensaje.textContent = "❌ Error al enviar el mensaje.";
            modal.style.display = "flex";
            console.error("Error:", error);
        }

        // Cerrar modal al hacer clic en la "X"
        cerrarModal.addEventListener("click", function () {
            modal.style.display = "none";
        });

        // Cerrar modal al hacer clic fuera de la ventana
        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});
