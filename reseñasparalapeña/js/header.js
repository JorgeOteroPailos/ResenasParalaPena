document.addEventListener("DOMContentLoaded", () => {
    const footer = document.querySelector("header");
    if (footer) {
        const htmlFooter = `
        <div class="header-container">
          <!-- Nombre de la web a la izquierda -->
          <span class="logo" onclick="window.location.href='v2.html'">Reseñas para la Peña</span>
      
          <!-- Botones alineados a la derecha -->
          <div class="header-buttons">
            <a href="v2.html" class="btn">
              <span class="icon">🏠</span>
            </a>
            <button onclick="window.location.href='login.html'">Iniciar sesión</button>
          </div>
        </div>
        `
        ;
        
        footer.innerHTML = htmlFooter;
    }
  });
