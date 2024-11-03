function lanzarConfeti() {
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}

window.onload = lanzarConfeti;


// script.js

function toggleMenu() {
	const menu = document.querySelector('.menu');
	menu.classList.toggle('open'); // Activa o desactiva la clase "open"
}
