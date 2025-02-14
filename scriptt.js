document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío si hay errores

    let isValid = true;
    const inputs = document.querySelectorAll(".input-field");

    inputs.forEach(input => {
        if (input.value.trim() === "") {
            input.classList.add("error"); // Borde rojo
            isValid = false;
        } else {
            input.classList.remove("error"); // Volver al estilo normal
        }
    });

    if (!isValid) {
        document.getElementById("error-message").classList.remove("hidden"); // Muestra mensaje de error
    } else {
        document.getElementById("error-message").classList.add("hidden"); // Oculta mensaje si todo está bien
        alert("Formulario enviado correctamente!");
        // Aquí puedes enviar el formulario con AJAX o procesarlo
    }
});

// Eliminar borde rojo cuando el usuario escribe en el campo
document.querySelectorAll(".input-field").forEach(input => {
    input.addEventListener("input", function() {
        if (this.value.trim() !== "") {
            this.classList.remove("error");
        }
    });
});

