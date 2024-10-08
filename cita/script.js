// Inicializar EmailJS con el User ID correcto
emailjs.init("dOXVkPfAswaa1P0LL");

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('citaForm');
    const preguntaInicial = document.getElementById('preguntaInicial');
    const botonSi = document.getElementById('botonSi');
    const botonNo = document.getElementById('botonNo');

    // Mostrar el formulario al hacer clic en "Sí"
    botonSi.addEventListener('click', function() {
        preguntaInicial.style.display = 'none'; // Oculta la pregunta inicial
        form.style.display = 'block';           // Muestra el formulario
    });

	botonNo.addEventListener('mouseenter', function() {
		this.style.opacity = '0';
	});

	botonNo.addEventListener('mouseleave', function() {
		this.style.opacity = '1';
	});

    // Enviar el formulario a través de EmailJS
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Recolectar los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;

        // Configuración del email a enviar
        const templateParams = {
            nombre: nombre,
            fecha: fecha,
            correo: 'pausanpi1606@gmail.com' // Siempre se enviará a este correo
        };

        // Enviar el correo a través de EmailJS
        emailjs.send('service_kkvm9re', 'template_by3cdj5', templateParams)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Cita agendada con éxito!');
                form.reset();
            }, function(error) {
                console.error('Error al enviar el correo:', error);
                alert('Error al agendar la cita. Inténtalo de nuevo.');
            });
    });
});
