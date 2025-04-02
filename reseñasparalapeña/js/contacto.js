document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-contacto");

  formulario.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que se recargue la página

    // Obtener los valores (si los necesitas en el futuro)
    const inputs = formulario.querySelectorAll("input, textarea");
    const datos = {};
    inputs.forEach((el) => {
      datos[el.placeholder] = el.value;
      el.value = ""; // Limpiar el campo
    });

    // Crear mensaje flotante
    const mensaje = document.createElement("div");
    mensaje.textContent = "¡Mensaje enviado con éxito!";
    mensaje.style.position = "fixed";
    mensaje.style.top = "20px";
    mensaje.style.right = "20px";
    mensaje.style.backgroundColor = "#a1d699";
    mensaje.style.color = "white";
    mensaje.style.padding = "15px 25px";
    mensaje.style.borderRadius = "10px";
    mensaje.style.boxShadow = "0 2px 10px rgba(0,0,0,0.2)";
    mensaje.style.zIndex = "1000";
    mensaje.style.fontSize = "18px";
    mensaje.style.opacity = "1";
    mensaje.style.transition = "opacity 0.5s ease";

    document.body.appendChild(mensaje);

    setTimeout(() => {
      mensaje.style.opacity = "0";
      setTimeout(() => mensaje.remove(), 500);
    }, 3000); // Desaparece tras 3 segundos
  });
});
