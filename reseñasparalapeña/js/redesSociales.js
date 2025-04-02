

  document.querySelectorAll('.boton-sin-rs').forEach(btn => {
    btn.addEventListener('click', e => {
      e.preventDefault();

      // Si ya hay un tooltip, no duplicar
      if (btn.querySelector('.tooltip-msg')) return;

      // Crear el bocadillo
      const tooltip = document.createElement('span');
      tooltip.className = 'tooltip-msg';
      tooltip.innerText = '¡Vaya! Aún no tenemos esa red social 😅';

      // Posicionamiento relativo
      btn.style.position = 'relative';
      tooltip.style.top = '-40px';
      tooltip.style.left = '50%';
      tooltip.style.transform = 'translateX(-50%)';

      btn.appendChild(tooltip);

      // Eliminar después de 3s
      setTimeout(() => {
        tooltip.remove();
      }, 3000);
    });
  });