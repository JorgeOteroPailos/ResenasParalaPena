
  
// Referencias a los elementos
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');
const homeButton = document.getElementById('home-button');
const resultsContainer = document.getElementById('results-container');
const mainSection = document.getElementById('main-section');
const resultsSection = document.getElementById('results-section');

// Se ejecuta al cargar la página, para cargar las opiniones desde el archivo JSON
let opinions = [];

const xhr = new XMLHttpRequest();
xhr.open("GET", "../datos/opiniones.json", true);

xhr.onreadystatechange = function () {
  if (xhr.readyState === 4) {
    if (xhr.status === 200) {
      try {
        opinions = JSON.parse(xhr.responseText);
        console.log("Opiniones cargadas:", opinions);
        renderOpinions();
      } catch (error) {
        console.error("Error parseando JSON:", error);
      }
    } else {
      console.error("Error cargando opiniones.json:", xhr.statusText);
    }
  }
};

xhr.send();
// Ejemplo: mostrar opiniones en el DOM

// Variable para controlar el estado de la búsqueda
let isResultsVisible = false;

// Función para buscar y mostrar opiniones
function performSearch() {
    const query = searchInput.value.toLowerCase();
    if (!query) return; // No hacer nada si el input está vacío

    resultsContainer.innerHTML = ''; // Limpiar resultados anteriores

    const filteredOpinions = opinions.filter(opinion =>
        opinion.address.toLowerCase().includes(query)
    );

    console.log('Resultados filtrados:', filteredOpinions);

    if (filteredOpinions.length === 0) {
        resultsContainer.innerHTML = '<p style="color: white; text-align: center;">No se encontraron opiniones para esta dirección.</p>';
    } else {
        filteredOpinions.forEach(opinion => {
            const card = document.createElement('div');
            card.classList.add('opinion-card');

            card.innerHTML = `
                <div class="opinion-text">${opinion.opinion}</div>
                <div class="opinion-footer">
                    <div class="opinion-user">${opinion.user}</div>
                    <span class="expand-icon"><i class="fas fa-expand-alt"></i></span>
                </div>
            `;

            card.querySelector('.expand-icon').addEventListener('click', () => {
                openModal(opinion);
            });

            resultsContainer.appendChild(card);
        });
    }

    // Mostrar la sección de resultados
    resultsSection.style.display = 'flex';

    // Desplazar a la sección de resultados rápidamente
    window.scrollTo({
        top: mainSection.offsetHeight,
        behavior: 'smooth'
    });

    // Ajustar la duración de la animación (más rápida)
    document.documentElement.style.scrollBehavior = 'smooth';
    setTimeout(() => {
        document.documentElement.style.scrollBehavior = 'auto';
    }, 300);

    isResultsVisible = true;
}

// Buscar al hacer clic en el botón
searchButton.addEventListener('click', performSearch);

// Buscar al presionar Enter
searchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

// Redirigir a la página principal al hacer clic en el botón de casa
homeButton.addEventListener('click', () => {
    window.location.href = '../html/index.html';
});

// Detectar scroll para reiniciar la búsqueda y evitar bajar sin buscar
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Evitar bajar a la sección de resultados si no se ha buscado
    if (!isResultsVisible && currentScrollTop > mainSection.offsetHeight) {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        });
        return;
    }

    // Si estamos en la sección de resultados y hacemos scroll hacia arriba
    if (isResultsVisible && currentScrollTop < lastScrollTop && currentScrollTop <= mainSection.offsetHeight) {
        // Reiniciar la búsqueda
        resultsContainer.innerHTML = ''; // Limpiar resultados
        searchInput.value = ''; // Limpiar el input
        resultsSection.style.display = 'none'; // Ocultar la sección de resultados

        // Desplazar a la sección principal con una animación más lenta
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

        // Ajustar la duración de la animación (más lenta)
        document.documentElement.style.scrollBehavior = 'smooth';
        setTimeout(() => {
            document.documentElement.style.scrollBehavior = 'auto';
        }, 800); // Duración de 800ms para la animación de subir

        isResultsVisible = false;
    }

    lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
});

// Funciones para el modal
const modal = document.getElementById('opinion-modal');
const closeModalBtn = document.getElementById('close-modal');
const modalAddress = document.getElementById('modal-address');
const modalOpinion = document.getElementById('modal-opinion');
const modalUser = document.getElementById('modal-user');

function openModal(opinion) {
    modalAddress.textContent = opinion.address;
    modalOpinion.textContent = opinion.opinion;
    modalUser.textContent = opinion.user;
    modal.classList.add('show');
}

closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('show');
});

// Cerrar el modal al hacer clic fuera del contenido
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
    }
});