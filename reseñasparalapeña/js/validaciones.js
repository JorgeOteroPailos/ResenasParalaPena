document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('form');
    if (form) {
      form.addEventListener('submit', function (e) {
        const password = document.getElementById('reg_password');
        const password2 = document.getElementById('reg_password2');
        if (password && password2 && password.value !== password2.value) {
          e.preventDefault(); // Evita el envío del formulario
          alert('Las contraseñas no coinciden');
        }
      });
    }
  });
  