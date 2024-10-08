document.addEventListener('DOMContentLoaded', function() {
	const button = document.getElementById('surpriseButton');
	const imagen = document.getElementById('imagen');

	button.addEventListener('click', function() {
		button.innerHTML = '¡Te quiero mucho! <br> ❤️';

		imagen.classList.toggle('hidden');

		button.disabled = true;
		button.classList.toggle('button-active');

		/*setTimeout(() => {
			button.classList.toggle('button-active');
		}, 250);*/
	});
});