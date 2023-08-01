// Cambiar el color de fondo del encabezado al hacer scroll

window.addEventListener('scroll', function() {
    var header = document.querySelector('header');
    if (window.scrollY > 0) {
      header.style.backgroundColor = '#333';
    } else {
      header.style.backgroundColor = '#f2f2f2';
    }
  });
  
  // Mostrar y ocultar el formulario de contacto al hacer clic en el botón
  
  var btnContacto = document.querySelector('.btn-contacto');
  var formulario = document.querySelector('#contacto form');
  
  btnContacto.addEventListener('click', function() {
    formulario.classList.toggle('visible');
  });

  // Obtener el elemento body
//var body = document.querySelector('body');

// Cambiar el cursor a un destornillador
//body.style.cursor = 'url("destornillador.png"), auto';
window.addEventListener('DOMContentLoaded', function() {
  var body = document.querySelector('body');
  body.style.cursor = 'url("destornillador.png"), auto';
});