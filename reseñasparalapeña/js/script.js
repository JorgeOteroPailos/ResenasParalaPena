document.addEventListener("DOMContentLoaded", function () {
    const direccionInput = document.getElementById("direccion");
    const verificarBtn = document.getElementById("verificar");
    const mensajeError = document.getElementById("mensaje-error");
    const opinionContainer = document.getElementById("opinion-container");

    // Función para verificar la dirección
    verificarBtn.addEventListener("click", function () {
        const direccionIngresada = direccionInput.value.trim();
        
        // Verificamos si la dirección ingresada está en el archivo "direcciones.txt"
        fetch("../datos/direcciones.txt")
            .then(response => response.text())
            .then(data => {
                const direcciones = data.split("\n").map(linea => linea.trim());
                
                if (direcciones.includes(direccionIngresada)) {
                    mensajeError.style.display = "none"; // Ocultar el mensaje de error
                    opinionContainer.style.display = "block"; // Mostrar cuadro de opinión
                } else {
                    mensajeError.style.display = "block";
                    mensajeError.textContent = "❌ La dirección no existe en la base de datos.";
                    opinionContainer.style.display = "none"; // Ocultar cuadro de opinión
                }
            })
            .catch(error => console.error("Error al cargar direcciones:", error));
    });
});
