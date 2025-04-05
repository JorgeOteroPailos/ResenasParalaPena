document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header"); // Selecciona el <header>
  if (header) {
    const htmlHeader = `
      <div class="header-container">
        <a href="../html/index.html" class="logo-link">Reseñas para la Peña</a>
        <div id="header-buttons"></div>
      </div>
    `;
    header.innerHTML = htmlHeader;
  }
  updateHeader(); // Llama a updateHeader después de generar el header

  // Efecto jQuery para el título
  $(document).ready(() => {
    const $headerTitle = $('.header-container .logo-link'); // Apunta al <a> generado
    $headerTitle.on('click', () => {
      $headerTitle.fadeOut(500, () => $headerTitle.fadeIn(500));
    });
    $headerTitle.on('mouseenter', () => $headerTitle.css('color', '#e08a1e'));
    $headerTitle.on('mouseleave', () => $headerTitle.css('color', 'black'));
  });
});

function updateHeader() {
  const headerButtons = document.getElementById('header-buttons');
  const loggedInUser = localStorage.getItem('loggedInUser');
  const currentPage = window.location.pathname.split('/').pop(); // Obtiene el nombre del archivo actual
  const pagesToHideCircle = ['../html/opinion.html', '../html/buscar-opinion.html'];

  if (loggedInUser) {
    if (pagesToHideCircle.includes(currentPage)) {
      headerButtons.innerHTML = ''; // No muestra círculo en ciertas páginas
    } else {
      headerButtons.innerHTML = `
        <button class="user-circle" onclick="toggleMenu()">${loggedInUser.charAt(0).toUpperCase()}</button>
        <div id="user-menu" class="user-menu">
          <div class="user-info">
            <div class="user-circle large">${loggedInUser.charAt(0).toUpperCase()}</div>
            <span>${loggedInUser}</span>
          </div>
          <button onclick="logout()">Cerrar sesión</button>
        </div>
      `;
    }
  } else {
    headerButtons.innerHTML = `<a href="../html/login.html" class="btn">Iniciar Sesión</a>`;
  }
}

function toggleMenu() {
  const menu = document.getElementById('user-menu');
  if (menu) {
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  }
}

function logout() {
  localStorage.removeItem('loggedInUser');
  window.location.href = '../html/index.html';
}

// Cerrar el menú al hacer clic fuera de él
document.addEventListener('click', function(event) {
  const menu = document.getElementById('user-menu');
  const button = document.querySelector('.user-circle');
  if (menu && button && menu.style.display === 'block') {
    const isClickInsideMenu = menu.contains(event.target);
    const isClickOnButton = button.contains(event.target);
    if (!isClickInsideMenu && !isClickOnButton) {
      menu.style.display = 'none';
    }
  }
});