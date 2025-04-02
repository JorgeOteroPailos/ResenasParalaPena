document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");
  if (footer) {
      const htmlFooter = `
      <p>
      <a href="../html/sobreNosotros.html">Sobre nosotros</a>
       | <a href="../html/cookies.html">Cookies</a>
       | <a href="../html/contacto.html">Contacto</a> 
       | <a href="../html/empresa.html">Empresa</a> 
       | <a href="../html/recursos.html">Recursos</a> 
       | <a href="../html/consejos.html">Consejos</a>
       </p>
      <p>
      <a href="../html/politicaPrivacidad.html">Política de privacidad</a> 
      | <a href="../html/terminosYCondiciones.html">Términos y condiciones</a> 
      | <a href="../html/buenasPracticas.html">Buenas prácticas</a> 
      | <a href="../html/redesSociales.html">Redes sociales</a> 
      | <a href="../html/socios.html">Socios</a>
      </p>
      <p>&copy; 2025 Reseñas para la Peña. Hecho con 💻 y 💜 en la USC.</p>`;
      
      footer.innerHTML = htmlFooter;
  }
});