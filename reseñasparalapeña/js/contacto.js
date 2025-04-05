document.addEventListener("DOMContentLoaded", () => {
  const formulario = document.getElementById("form-contacto");
  const submitButton = formulario.querySelector("button[type='submit']");

  // Evento 1: Submit del formulario
  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    showMessage();
  });

  // Evento 2: Mouseover en el botón de enviar
  submitButton.addEventListener("mouseover", () => {
    submitButton.style.backgroundColor = "#8cc084"; // Cambio de color al pasar el ratón
  });

  // Evento 3: Mouseout en el botón de enviar
  submitButton.addEventListener("mouseout", () => {
    submitButton.style.backgroundColor = "white"; // Vuelve al color original
  });

  function showMessage() {
    const inputs = formulario.querySelectorAll("input, textarea");
    inputs.forEach((el) => (el.value = ""));

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
    }, 3000);
  }
});
