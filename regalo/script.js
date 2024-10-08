document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('surpriseButton');
    const imagen = document.getElementById('imagen');

    button.addEventListener('click', function() {
        // Cambiar el texto del botón
        button.innerHTML = '¡Comprame un heladito please! ❤️';
        
        // Hacer visible la imagen
        imagen.classList.remove('hidden');

        // Deshabilitar el botón para evitar más clics
        button.disabled = true; // Esto deshabilita el botón
        button.classList.add('button-active'); // Mantener el color activo

        // (Opcional) Cambiar el estilo del botón para mostrar que está deshabilitado
        button.style.cursor = 'not-allowed'; // Cambia el cursor a no permitido
        button.style.opacity = '0.5'; // Cambia la opacidad para mostrar que está deshabilitado
    });
});
