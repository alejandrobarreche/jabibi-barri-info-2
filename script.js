document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const inputs = document.querySelectorAll("input, textarea");

    form.addEventListener("submit", function (event) {
        event.preventDefault();
        let valid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                input.classList.add("error");
                valid = false;
            } else {
                input.classList.remove("error");
            }
        });

        if (valid) {
            alert("Formulario enviado con éxito!");
            form.reset();
        }
    });

    inputs.forEach(input => {
        input.addEventListener("input", function () {
            if (this.value.trim() !== "") {
                this.classList.remove("error");
            }
        });
    });

    document.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            form.dispatchEvent(new Event("submit"));
        }
    });
});
