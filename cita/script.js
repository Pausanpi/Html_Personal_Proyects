// Inicializar EmailJS con el User ID correcto
emailjs.init("dOXVkPfAswaa1P0LL");

document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('citaForm');
    const preguntaInicial = document.getElementById('preguntaInicial');
    const botonSi = document.getElementById('botonSi');
    const botonNo = document.getElementById('botonNo');
	const container1 = document.querySelector(".container1");
	const container2 = document.querySelector(".container2");
    let opcionSeleccionada = '';

    // Mostrar el formulario al hacer clic en "Sí"
    botonSi.addEventListener('click', function() {
		container1.style.display = "none";
		container2.style.display = "block";
        preguntaInicial.style.display = 'none'; // Oculta la pregunta inicial
        form.style.display = 'block';           // Muestra el formulario
		opcionesCita.style.display = 'block';
    });

	botonNo.addEventListener('mouseenter', function() {
		this.style.opacity = '0';
	});

	botonNo.addEventListener('mouseleave', function() {
		this.style.opacity = '1';
	});

    window.selectOption = function (opcion) {
        console.log(`Opción seleccionada: ${opcion}`); // Para verificar que se está llamando
    
        // Desmarcar cualquier opción previamente seleccionada
        const opciones = document.querySelectorAll('.opcion-btn');
        opciones.forEach(function (opcionBtn) {
            opcionBtn.classList.remove('active');
        });
    
        // Seleccionar el botón correspondiente a la opción elegida
        const botonSeleccionado = document.querySelector(`button[data-opcion="${opcion}"]`);
        
        if (botonSeleccionado) {
            console.log("Botón encontrado, aplicando clase 'active'");
            botonSeleccionado.classList.add('active');
            opcionSeleccionada = opcion; // Guardar la opción seleccionada
        } else {
            console.error("No se encontró el botón para la opción seleccionada.");
        }
    };
    
      

    // Enviar el formulario a través de EmailJS
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        // Recolectar los datos del formulario
        const nombre = document.getElementById('nombre').value;
        const fecha = document.getElementById('fecha').value;
		const correo = document.getElementById('correo').value;
        const hora = document.getElementById('hora').value;


        // Configuración del email a enviar
        const templateParams = {
            nombre: nombre,
            fecha: fecha,
            correo: 'pausanpi1606@gmail.com', // Siempre se enviará a este correo
			opcion: opcionSeleccionada,
            hora: hora
        };

		const templateParams2 = {
            nombre: nombre,
            fecha: fecha,
            user_correo: correo, // Siempre se enviará a este correo
			opcion: opcionSeleccionada,
            hora: hora
        };

        // Enviar el correo a través de EmailJS
        emailjs.send('service_kkvm9re', 'template_by3cdj5', templateParams)
		emailjs.send('service_kkvm9re', 'template_48byf3z', templateParams2)
            .then(function(response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Cita agendada con éxito!');
                form.reset();
                opcionSeleccionada = null;
				opciones.forEach(function (opcionBtn) {
					opcionBtn.classList.remove('active');
				});
            }, function(error) {
                console.error('Error al enviar el correo:', error);
                alert('Error al agendar la cita. Inténtalo de nuevo.');
            });
		
    });
});
