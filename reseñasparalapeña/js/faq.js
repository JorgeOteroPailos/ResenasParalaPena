$(document).ready(() => {
    const $details = $('details.desplegable'); // Objeto jQuery
  
    $details.each(function () {
      const $this = $(this); // Objeto jQuery para cada <details>
      const $summary = $this.find('summary');
      const $content = $this.find('p');
  
      // Ocultar contenido inicialmente con jQuery
      $content.hide();
  
      // Evento 1: Click para abrir/cerrar con animación
      $summary.on('click', (e) => {
        e.preventDefault(); // Evitar comportamiento por defecto del <details>
        if ($this.attr('open')) {
          $content.slideUp(300, () => $this.removeAttr('open'));
        } else {
          $content.slideDown(300, () => $this.attr('open', ''));
        }
      });
  
      // Evento 2: Mouseenter para cambiar fondo
      $summary.on('mouseenter', () => {
        $summary.css('background-color', '#8cc084');
      });
  
      // Evento 3: Mouseleave para restaurar fondo
      $summary.on('mouseleave', () => {
        $summary.css('background-color', '#a1d699');
      });
    });
  });